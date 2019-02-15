//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};

var utils = require ('utils');
exports.name = function(){
	var d = new Drone(utils.getPlayerPos(self));
	d.box(blocks.stone, 3, 3, 3);
	d.fwd(1);
	d.right(1);
  };

  var utils = require ('utils');
  exports.haus = function(){
  var d = new Drone(utils.getPlayerPos(self));
  for(var i=0; i < 4; i++){
	  d.box(blocks.stone,6-(i*2),1,6-(i*2));
	  d.right(1);
	  d.fwd(1);
	  d.up(1);

  }}
