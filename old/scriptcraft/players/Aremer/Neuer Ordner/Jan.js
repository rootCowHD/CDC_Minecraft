var utils = require ('utils');

exports.Jan = function(){
  var d = new Drone(utils.getPlayerPos(self));
  d.box(blocks.stone, 3, 3, 3);
  d.fwd(1);
  d.right(1);
};
