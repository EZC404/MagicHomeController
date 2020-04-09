# MagicHomeController
a Magic Home led strip controll libary for nodejs
# Features
**Controll the led strip**
**Change Color of led strip**
# Instalition
put the MagicLedControll.js for src/MagicLedControll.js in your folder and add
```javascript
const Controller = require("./MagicLedControll.js");
```
to the top of your nodejs script
# Usage
example:
```javascript
const Controller = require("./MagicLedControll.js");

var c = new Controller("192.168.137.152",5577);

c.sendCommand(c.setOn(true));
c.sendCommand(c.setRGB(255,0,0));
```
Default port = 5577
