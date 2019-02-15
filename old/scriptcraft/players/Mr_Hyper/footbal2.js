exports.football2 = function(){
chkpt('start');
box0(80,60,1,60).fwd (60).box0(80,60,1,60).turn(1).fwd(22).left(8).arc({blockType: 80,
	meta: 0,
	radius: 8,
     strokeWidth: 1,
  //   quadrants: { topright: true },
     orientation: 'horizontal',
     stack: 1,
     fill: false
	 } );
move('start');
right(10).box0(80, 40,1,20).fwd(100).box0(80, 40,1,20)	;
// bramka 1
move ('start');
right(20).box0(42,1,10,1).up(10).box0(42,21,1,1).right(20).down(10).box0(42,1,10,1);
// siatka 1
move ('start');
back(1).right(20).box(30,20,10,1);
// bramka 2
move ('start');
fwd(119).right(20).box0(42,1,10,1).up(10).box0(42,21,1,1).right(20).down(10).box0(42,1,10,1);
//siatka 2
move ('start');
fwd(121).back(1).right(20).box(30,20,10,1);

for(var i=0;i<7;i++)
{
move('start');
left(3).back(2).up(1).turn(3).up(i).fwd(i).box(134,124,1,1);
};
for(var i=0;i<7;i++)
{
move('start');
right(64).left(3).back(2).up(1).turn(1).up(i).fwd(i).left(124).box(134,124,1,1);
};


for(var i=0;i<7;i++)
{
move('start');
right(62).back(6).up(1).turn(2).up(i).fwd(i).box(134,64,1,1);

};



for(var i=0;i<7;i++)
{
move('start');
fwd(126).left(2).fwd(6).up(1).up(i).fwd(i).box(134,64,1,1);

};

};
