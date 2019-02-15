//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};

var utils =require('utils');

exports.villa =  function() {
  var drone = new Drone(utils.getPlayerPos(self));
  drone.box0(blocks.oak,20,20,20);
  drone.up(5);
  drone.box(blocks.oak,20,20,1);
};
