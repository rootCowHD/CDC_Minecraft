var utils = require('utils');

exports.fest=function(Etagen){
var d = new Drone (utils.getPlayerPos(self));
d.fwd(9);
for(var i=0;i<Etagen;i++){

d.box(20,8,1,4);
d.up(1);
d.box0(1,8,5,4);
d.up(5);
d.box(blocks.stone,8,1,4);
}
};