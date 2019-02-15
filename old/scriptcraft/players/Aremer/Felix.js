var utils = require ('utils');

exports.defekt =function(){
  var d = new Drone(utils.getPlayerPos(self));

  d.fwd();
  d.box(blocks.diamond,10,1,10);

  d.up();
  d.box0(blocks.diamond,10,10,10);

  d.up();

  var Wand = 0;
  while(Wand<4){
    d.fwd();
    var Zahl = 0;
    while(Zahl<4){
      d.right();
      d.turn(3);
      d.box( blocks.torch +":" + Drone.PLAYER_TORCH_FACING[d.dir]);
      d.turn();
      d.left();
      d.fwd(2);
      Zahl++;
    }
    d.turn();
    Wand++;
  }


  d.up(9);
  d.box(blocks.diamond,10,1,10);

}
