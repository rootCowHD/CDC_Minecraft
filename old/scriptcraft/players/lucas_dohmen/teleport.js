var utils = require('utils');
exports.teleport = function(player) {
    var world = server.worlds.get(0);
    var spawn = world.getSpawnLocation();
    self.teleport(utils.getPlayerPos(player));
};
