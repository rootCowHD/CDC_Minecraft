//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.haus = function( player ){

var d = new Drone(self)
	d.box0("43:5",10,10,10).right(4)
  //d.box("64",1,1,)
  d.door2()
d.up(10)
d.left(4)
d.down(9)
d.right(1)
d.box("20",2,2)
d.up(9)
d.left(1)
 var h=10
 for (var i = 0 ; i <= 5 ; i++) {
 //hier bauen
 d.box("45",h,1,h)
 d.up(1).right(1).fwd(1)
h=h-2
  }

};
