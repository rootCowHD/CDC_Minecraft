//Try running this function from Minecraft with:  /js $username.hi( self )

//Remember to use your real username instead of $username!

//So if you had username 'walterh', you would run: /js walterh.hi( self )


exports.hi = function( player ){

	echo( player, 'Hi ' + player.name);

};


var utils = require ('utils');

exports.Jan = function(){
  var d = new Drone(utils.getPlayerPos(self));
  d.box0(blocks.stone, 15, 8, 15);
  d.up(8);
for(var i=0; i < 8; i++){
	d.box(blocks.stone,15-(i*2),1,15);
	d.right(1);
	//d.fwd(1);
	d.up(1);
}
};

/**
for(var i=0; i < 4; i++){
	d.box(blocks.stone,8-(i*2),1,8;
	d.right(1);
	//d.fwd(1);
	d.up(1);
}
/**/
