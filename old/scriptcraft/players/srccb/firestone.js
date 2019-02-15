var utils = require('utils');

exports.firestone = function() {
  var drone = new Drone(utils.getPlayerPos(self));

  drone.up(1);

  for(var i = 1; i < 5 ; i++)  {
    drone.box(20, 1, i, 1);
  }
  drone.left(5);

  for(var i = 1; i < 5 ; i++)  {
    drone.box('95:2', 1, i, 1);
  }
};
