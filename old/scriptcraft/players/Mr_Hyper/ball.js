exports.ball = function(){
  up(1).box(35,1,1,1);
  events.blockBreak( myBlockBreakHook);
};

if (typeof Mr_HyperBall === 'undefined' || Mr_HyperBall === null){  //Sollte die Variable endersMode nicht vorhanden sein
  var slash = require('slash');                                 //lädt das Slash Plugin
  slash("js var Mr_HyperBall=false");                             //und legt diese im Namen des Servers an (mit dem Wert false)\
      //Ebenso die Variable der Spieler, persist bedeutet, dass diese auch nach einem neustart wieder geladen werden
}

function myBlockBreakHook(event){
var breaker = event.player ;
var bl = event.block ;
echo( breaker,'Du hast ein Block ' + bl.getType() + ' zerstoert!!!!' + Mr_HyperBall.getType() + ' x ' + Mr_HyperBall) ;

//if(bl.getType() == WOOL){
//  var dr = new Drone(bl.location);
//  dr.box(35,1,1,1);
//}

  if(Mr_HyperBall == false){
    this.unregister();
  }
}
