var utils = require('utils');

exports.schokolade2=function(){
	var dronen=new Drone(utils.getPlayerPos(self));
	dronen.box(blocks.endstone,8,1,8);
	dronen.up(1);
	dronen.box0(blocks.stone,8,6,8);
	dronen.up(6);
	dronen.box(blocks.endstone,8,1,8);

	dronen.up(1);

  for(var j=0;j<4;j++){
  	for(var i=0;i<4;i++){
  		dronen.turn();
  		dronen.left(7-(j*2));
  		dronen.box(109,8-(j*2),1,1);
  	}
    dronen.fwd(1);
    dronen.right(1);
    dronen.up(1);
  }
}
