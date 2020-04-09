const net = require('net');

//Default Port = "5577"

class Controller {
    constructor(addr,port) {
        this.address = addr;
        this.port = port
    }
    

    sendCommand(buf){
        var socket = net.connect(this.port, this.address, () => {
            let y = 0;
            for (let byte of buf.values()) {
                y += byte;
            }
            y &= 0xFF;
            let command = Buffer.concat([ buf, Buffer.from( [y] ) ]);
            
            socket.write(command);
            socket.destroy();
        });
    }

    setOn(x){
        return Buffer.from([0x71, (x) ? 0x23 : 0x24, 0x0f]);
    }
    
    
    setRGB(r,g,b,w){
        var red = clamp(r, 0, 255);
        var green = clamp(g, 0, 255);
        var blue = clamp(b, 0, 255);
        var transparency = clamp(w, 0, 255);
        return Buffer.from([ 0x31, red, green, blue, transparency, 0, 0, 0x0f ]);
    }
    
	//Math
    clamp(value, min, max) {return Math.min(max, Math.max(min, value));}
    
}


module.exports = Controller;
