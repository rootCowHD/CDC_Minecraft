//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )

var utils = require ('utils');

exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};
 
exports.Schloss=function(){
 var d = new Drone(utils.getPlayerPos(self));
d.box(blocks.obsidian,101,5,101);
d.up(5);
d.box0(blocks.stone,101,5,101);
d.up(5);

var i=0;
while(i<4){
	var z=0;
	while(z<50){
		z++;
		d.box(17,1,1,1);
		d.fwd(2);
		}
	d.turn();
i++;
	}

}

exports.Schloss2=function(){
 var d = new Drone(utils.getPlayerPos(self));
d.up(55);
d.box(blocks.obsidian,101,5,101);

d.box0(blocks.stone,101,5,101);
d.up(5);

var i=0;
while(i<4){
	var z=0;
	while(z<50){
		z++;
		d.box(17,1,1,1);
		d.fwd(2);
		}
	d.turn();
i++;
	}

}exports.Schloss3=function(){
 var d = new Drone(utils.getPlayerPos(self));
d.up(20);
d.box(blocks.obsidian,101,5,101);
d.up(5);
d.box0(blocks.stone,101,5,101);
d.up(5);

var i=0;
while(i<4){
	var z=0;
	while(z<50){
		z++;
		d.box(17,1,1,1);
		d.fwd(2);
		}
	d.turn();
i++;
	}

/*

*/