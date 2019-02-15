//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.hi = function (player) {
	echo(player, 'Hi ' + player.name);
};

exports.BauEinHaus = function () {
	var utils = require("utils");
	var d = new Drone(utils.getPlayerPos(self));

	d.fwd(5);
	d.down(1);
	d.box(168, 10, 1, 10);
	d.up(1);

	for (var i = 0; i < 4; i++) {
		
	wand(d);
	}

	d.right(5);
	d.door_iron();
	d.back();
	d.box(70, 1, 1, 1);
	d.fwd(2);
	d.box(70, 1, 1, 1);
	d.left(5);
	d.back();
	d.up(3);

	d.box(168, 10, 1, 10);
	d.up(1);


}

function wand(w){
	w.box(1, 1, 3, 10);
	w.up();
	w.fwd(5);
	w.right();
	// w.back();
	// w.box( blocks.ladder +":" + Drone.PLAYER_TORCH_FACING[w.dir]);
	// w.fwd();
	w.turn(3);
	w.box( blocks.torch +":" + Drone.PLAYER_TORCH_FACING[w.dir]);

	w.turn();
	w.left();
	w.down();
	w.fwd(4);
	w.turn();
}


