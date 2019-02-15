var utils =require('utils')

exports.haus =function(){
  var drone = new Drone(utils.getPlayerPos(self));
drone.box(87,10,1,10)
drone.up()
drone.box(51,10,1,10)
drone.up()
drone.box(20,10,1,10)
drone.up()
drone.box(8,10,1,10)
drone.down(3)
drone.box0(20,11,11,11)
  //
  // back(1).
  // left(1).
  // box(20,,,).
  // box0(20,3,3,3);
};

exports.villa=function(){
  var drone = new Drone(utils.getPlayerPos(self));
  drone.box (blocks.glowstone,90,1,90);
  drone.box0 (blocks.quartz,90,90,90);
  drone.fwd();
  drone.right();
  drone.down(3);
  drone.box(blocks.water,6,3,3);
drone.up(93);
drone.left();
drone.back();
drone.box (blocks.quartz,90,1,90);
}
