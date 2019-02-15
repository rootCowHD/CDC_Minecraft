//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};

var utils =require('utils');

exports.bad = function(){
  var drone = new Drone(utils.getPlayerPos(self));
  drone.down(5);
  drone.box(blocks.water,15,5,15);
}
