var utils = require('utils')

exports.lavaPool = function() {

    var drone = new Drone(utils.getPlayerPos(self))
    drone.box(1,10,1,10)
    drone.right().fwd()
    drone.box(10,8,1,8)
}