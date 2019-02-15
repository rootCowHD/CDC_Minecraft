//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
var utils = require ('utils');
exports.hi = function( player ){
	echo( player, 'Hi ' + player.life);
};

exports.hallo =function(){
	var hack = new Drone(utils.getPlayerPos(self));
	hack.box(blocks.sandstone,8,1,8);
	hack.up(1);
	hack.box0( blocks.sandstone,8,4,8);
	hack.up(4);
	hack.fwd(1);
	hack.right(1);
	hack.box(blocks.glass,7,1,7);	
};
