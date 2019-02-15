//Try running this function from Minecraft with: /js $username.hi( self )
// Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
var utils = require('utils');

exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};
exports.schokolade=function(){
	var dronen=new Drone(utils.getPlayerPos(self));
	dronen.box(blocks.endstone,8,1,8);
	dronen.up(1);
	dronen.box0(blocks.stone,8,6,8);
	dronen.up(6);
	dronen.box(blocks.endstone,8,1,8);

	dronen.up(1);

	for(var i=0;i<4;i++){
		dronen.turn();
		dronen.left(7);
		dronen.box(109,8,1,1);
		dronen.fwd(1);
		dronen.right(1);
	}

};






exports.schokolade2=function(){
	var dronen=new Drone(utils.getPlayerPos(self));
	dronen.box(blocks.endstone,8,1,8);
	dronen.up(1);
	dronen.box0(blocks.stone,8,6,8);
	dronen.up(6);
	dronen.box(blocks.endstone,8,1,8);

	dronen.up(1);

	for(var i=0;i<4;i++){
		dronen.turn();
		dronen.left(7);
		dronen.box(109,8,1,1);
		dronen.fwd(1);
		dronen.right(1);
	}

};
