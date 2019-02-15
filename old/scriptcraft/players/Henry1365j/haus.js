var utils = require ('utils');

exports.turm=function(){
  var d = new Drone(utils.getPlayerPos(self));

//  d.box(blocks.glass, 1, 25, 1)
//d.box(blocks.glass,1,25,1)
d.box0(20,8,10,8)
d.fwd(1)
d.right()
// netherrack
d.box(87,6,1,6)
d.up()

// feuer
d.box(51,6,1,6)
d.up()
d.box(20,6,1,6)
d.up()
d.box(9,6,1,6)
d.up()
d.box(30,6,1,6)
d.up()
d.box(20,6,1,6)
d.up(4)
d.box0(20,6,4,6)
d.up(4)
d.fwd()
d.right()
d.box0(20,4,2,4)
d.fwd()
d.right()
d.box(10,2,2,2)
d.up(2)

d.box(20,2,1,2)


}
