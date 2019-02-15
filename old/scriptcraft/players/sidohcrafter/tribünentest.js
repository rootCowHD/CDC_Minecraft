var simi = require('utils')

exports.Block2 = function() {
  var electro = new Drone(simi.getPlayerPos(self));

  //Tribüne

  electro.turn(3);
  electro.fwd(1);
  electro.left(6);

  var i=9;
  var breite=16
  for(;i>0;i=i-2){

    electro.box(['156'],breite,1,1);
    electro.fwd(1);
    electro.box(['155'],breite,1,i);
    electro.up(1);
    electro.fwd(1);
    breite=breite+1
  }

}
