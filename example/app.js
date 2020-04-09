const Controller = require("./MagicLedControll.js");

var c = new Controller("192.168.137.152",5577);

c.sendCommand(c.setOn(true));
c.sendCommand(setRGB(255,0,0));