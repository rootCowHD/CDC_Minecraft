var utils = require ('utils');

exports.blablabla=function(){
  var d = new Drone(utils.getPlayerPos(self));
  d.box(1,10,10,1);
  d.up(10);
  d.box(11,10,10,1);
  d.box(20,10,10,10)
}
