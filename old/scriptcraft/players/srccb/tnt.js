var utils = require('utils')

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
