var build_roof = function(d, width) {
  width++;
  var roof_material = 53;
  d.up()
  d.back();
  d.left();

  while (width > 0) {
    for (var sides = 0; sides<4; sides++) {
      d.fwd(width);
      d.turn();
      d.box(roof_material, width, 1, 1);
    }

    d.up(1);
    d.fwd(1);
    d.right(1);

    width = width - 2;
  }

  if (width == 0) {
    d.down();
    d.box(5);
  }

}
/*
var build_roof = function(d, width) {
  var roof_material = 5;
  while (width > 0) {
    d.box0(roof_material, width, 1, width);
    d.up();
    d.fwd()
    d.right();
    width = width - 2;
  }
};
*/

exports.build = function (flrs, width) {
  var wall_material = blocks.bedrock;
  var d = new Drone(self);
  for (var floors = 0; floors<flrs; floors++) {
    d.box(wall_material, width, 1, width);
    d.up();
    d.box0(blocks.glass_pane, width, 3, width);
    d.up(3);
  }
  d.box(wall_material, width, 1, width);
  build_roof(d, width);
}
