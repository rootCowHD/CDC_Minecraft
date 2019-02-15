//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
var utils = require ('utils');


exports.Hallo = function( player ){
	echo( player, 'Hallo ' + player.name);
};


exports.building = function(b,x,y,z){
	var d = new Drone(utils.getPlayerPos(self));

	var i = 0;
	while (i<y) {
		d.box(b,i,1,i);
		d.up(1);
		i++;
	}
//box(b,x,1,z).up(1).box0(b,x,y,z);





};
