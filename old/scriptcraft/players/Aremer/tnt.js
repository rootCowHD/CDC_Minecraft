var utils = require('utils')

function random(min, max) {
  return Math.random() * (max - min) + min
}
exports.block = function(block) {
  var drone = new Drone(utils.getPlayerPos(self))

  drone.up(5)
  drone.box(block, 1, 1, 1)

}

exports.stair = function(type, height) {
  var d = new Drone(utils.getPlayerPos(self))

  d.spiral_stairs(type, height)

}

exports.rainbow = function() {
  var d = new Drone(utils.getPlayerPos(self))
  // for(i = 1; i < 10; i++) {
  d.rainbow();
  // d.up(20);
  // }

}
exports.maze = function(rad) {
  var d = new Drone(utils.getPlayerPos(self))
  d.maze(rad)
}
exports.fort = function() {
  var d = new Drone(utils.getPlayerPos(self))

  d.fort();
}
exports.castle = function() {
  var d = new Drone(utils.getPlayerPos(self))

  d.castle();
}
exports.road = function() {
  var d = new Drone(utils.getPlayerPos(self))
  var blcks = [10, 8, 10, 8, 10]

  d.boxa(blcks, 5, 1, 100)
}
exports.tnt = function() {
  var d = new Drone(utils.getPlayerPos(self))
}
exports.uido = function(plazer) {
  var d = new Drone(utils.getPlayerPos(plazer))
  d.box(1, 1, -80, 1)
}
exports.tree = function() {
  var d = new Drone(utils.getPlayerPos(self));
  d.up(14);
  d.box('18:3', 3, 3, 3);
  d.fwd(1);
  d.turn();
  d.fwd(1);
  for (var i = 14 ; i >= 0 ; i--) {
    d.box('17:3', 1, 1, 1);
    d.down(1);
  }
}

exports.forest = function() {
  var d = new Drone(utils.getPlayerPos(self));
  var directions = ['left', 'right', 'fwd', 'bwd']
  var num1 = Math.floor(random(0, 3))
  //echo(num1)
  //echo(directions[num1])
  for (var x = 0; x <= 10; x++) {
    //echo(x)
    eval('d.' + directions[num1] + '(' + random(5, 15) + ')')

    d.up(14);
    d.box('18:3', 3, 3, 3);
    d.fwd(1);
    d.turn();
    d.fwd(1);
    d.down(14);
    d.box('17:3', 1, 14, 1);
  }
}
exports.rainforest = function() {
  d = new Drone(utils.getPlayerPos(self));

}
exports.pos = function(player) {
  echo(utils.getPlayerPos(player))
}
exports.bigforest = function() {
  var d = new Drone(utils.getPlayerPos(self));
  var directions = ['left', 'right', 'fwd', 'bwd']
  var num1 = Math.floor(random(0, 3))
  //echo(num1)
  //echo(directions[num1])
  for (var x = 0; x <= 30; x++) {
    //echo(x)
    eval('d.' + directions[num1] + '(' + random(5, 20) + ')')

    d.up(14);
    d.box('18:3', 3, 3, 3);
    d.fwd(1);
    d.turn();
    d.fwd(1);
    for (var i = 14 ; i >= 0 ; i--) {
      d.box('17:3', 1, 1, 1);
      d.down(1);
    }
    d.up(1)
  }
}
exports.beacon = function(col) {
  var d = new Drone(utils.getPlayerPos(self))
  var colrs = {'orange':1,'red':14,'yellow':4}
  d.box(57, 3, 1, 3)
  d.up()
  d.fwd()
  d.right()
  d.box(138, 1, 1, 1)
  d.up()
  d.box('95:' + colrs[col], 1, 1, 1)
}
exports.river = function() {
  var d = new Drone(utils.getPlayerPos(self))
  d.box(1, 5, 1, 5)
  d.up()
  d.box(1, 4, 3, 5)
  d.up(3)
  d.fwd()
  d.box(1, 4, 3, 3)
  d.up()
  d.box(8, 1, 1, 1)
  d.down(6)
  d.turn()
  d.turn()
  d.box(8, 4, 1, 20)
}
exports.GLP =function(){
// strike lightning wherever a player's arrow lands
var explosion = require('Explosion');
events.projectileHit( function( event ){
  if ( entities.snowball( event.projectile ) // it's an arrow
       && entities.player( event.projectile.owner ) // it was shot by a player
     ) {
    explosion( event.projectile ); // strike lightning at the arrow location
  }
});}
exports.largeforest = function(size) {
  var d = new Drone(utils.getPlayerPos(self));
  var directions = ['left', 'right', 'fwd', 'bwd']
  var num1 = Math.floor(random(0, 3))
  //echo(num1)
  //echo(directions[num1])
  for (var x = 0; x <= size; x++) {
    //echo(x)
    eval('d.' + directions[num1] + '(' + random(5, 15) + ')')

    d.up(14);
    d.box('18:3', 3, 3, 3);
    d.fwd(1);
    d.turn();
    d.fwd(1);
    d.down(14);
    d.box('17:3', 1, 14, 1);
  }
}
exports.superlargeforest = function(size, clearing) {
  var d = new Drone(utils.getPlayerPos(self));
  var directions = ['left', 'right', 'fwd', 'bwd']
  var num1 = Math.floor(random(0, 3))
  //echo(num1)
  //echo(directions[num1])
  for (var x = 0; x <= size; x++) {
    //echo(x)
    eval('d.' + directions[num1] + '(' + random(clearing, clearing+10) + ')')

    d.up(14);
    d.box('18:3', 3, 3, 3);
    d.fwd(1);
    d.turn();
    d.fwd(1);
    d.down(14);
    d.box('17:3', 1, 14, 1);
  }
}
exports.fantasyforest = function(size, clearing) {
  var d = new Drone(utils.getPlayerPos(self));
  var directions = ['left', 'right', 'fwd', 'bwd']
  var num1 = Math.floor(random(0, 3))
  //echo(num1)
  //echo(directions[num1])
  for (var x = 0; x <= size; x++) {
    //echo(x)
    eval('d.' + directions[num1] + '(' + random(clearing, clearing+10) + ')')

    d.up(14);
    d.box('35:5', 3, 3, 3);
    d.fwd(1);
    d.turn();
    d.fwd(1);
    d.down(14);
    d.box('35:12', 1, 14, 1);
  }
}
exports.customforest = function(size, height, clearing, leaves, logs) {
  var d = new Drone(utils.getPlayerPos(self));
  var directions = ['left', 'right', 'fwd', 'bwd']
  var num1 = Math.floor(random(0, 3))
  //echo(num1)
  //echo(directions[num1])
  for (var x = 0; x <= size; x++) {
    //echo(x)
    eval('d.' + directions[num1] + '(' + random(clearing, clearing+10) + ')')

    d.up(height);
    d.box(leaves, 3, 3, 3);
    d.fwd(1);
    d.turn();
    d.fwd(1);
    d.down(height);
    d.box(logs, 1, height, 1);
  }
}
exports.hole = function(player) {
  var d = new Drone(utils.getPlayerPos(self));
  echo(self)
  d.down(20)
  d.backwards(10)
//  d.()
//  d.(10)
  d.box(0, 20, 20, 20)
}
exports.say = function() {
  echo(self)
}
exports.block = function() {
  var d = new Drone(utils.getLocation('MagicMieLP'))
  d.box(166, 1, 2, 1)
}

exports.spam = function(text, times) {
  var selector = require('/selector.js')
  for (var x = 0; x <= times; x++) {
    selector.writeAllPlayers(text)
  }
}
exports.superman = function(player) {
  var slash = require('slash')
  slash('effect ' + player + ' speed 10000 20 true')
  slash('effect ' + player + ' night_vision 100000 20 true')
  slash('effect ' + player + ' jump_boost 10000 20 true')
}
exports.desuper = function(thing) {
  var slash = require('slash')
  slash('effect ' + thing +' clear')
}
exports.helloworld = function(name) {
  var slash = require('slash')
  slash('kill ' + name)
}
exports.reset = function() {
  var surf = true
}
exports.optoggle = function(name) {
  var slash = require('slash')
  if (surf){
    slash('op ' + name)
  }
  else {
    slash('deop ' + name)
  }
}
exports.gototestsite = function() {
  var slash = require('slash')
  slash('teleport Aremer 2000 70 -2000')
}
exports.roov = function(player, command) {
  var sl = require('slash');
  sl('execute ' + player + ' ~ ~ ~ ' + command);
}
exports.gotospawn = function(player) {
  var slash = require('slash')
  slash('teleport Aremer 2028 70 -615')
}
exports.makeBiome = function() {
  var d = new Drone(utils.getPlayerPos(self));
  var defaultsh = 10
  var defaultdh = 4
  var i = 1
  var sh = Math.floor(random(4, defaultsh))
  var dh = Math.floor(random(1, defaultdh))
  var r = sh
  for (var x = 0; x <= 398; x++) {
    if (i == 20) {
      d.turn()
      d.fwd(1)
      d.turn()
      d.fwd(19)
      d.turn()
      d.turn()
      i = 1
      sh = r
    }
    var z = Math.floor(random(-1, 2))
    var sh = sh + z
    echo(random(0, 10))
    echo(sh)
    d.box(1, 1, sh, 1)
    d.up(sh)
    d.box(3, 1, 10 - sh, 1)
    d.down(sh)
    d.fwd(1)
    i++
  }
}
exports.dumm = function() {
  s = require('slash')
  s('give @a minecraft:dirt 1 0 {display:{Name:scheisse}}')
}
