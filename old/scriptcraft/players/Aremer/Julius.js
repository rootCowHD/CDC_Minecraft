var utils = require ('utils');

exports.Julius =function(){
  var d = new Drone(utils.getPlayerPos(self));

  d.down();
  d.box(blocks.stone,6,4,6);
  d.up(1);
  d.right();
  d.fwd();
  d.box(blocks.air,4,2,4);
}
