var utils = require('utils');

exports.haus = function(  ){

var d = new Drone(utils.getPlayerPos(self))

for (var i = 0; i < 5; i++) {
    d.box(1,1,6,1)
    d.right()
}
for (var i = 0; i < 5; i++) {
    d.box(1,1,6,1)
    d.fwd()
}


for (var i = 0; i < 5; i++) {
    d.box(1,1,6,1)
    d.left()
}


for (var i = 0; i < 5; i++) {
    d.box(1,1,6,1)
    d.back()
}


};

// left() - links bewegen
// right() - rechts bewegen
// fwd() - vorwaerts bewegen
// back() - rueckwaerts bewegen
