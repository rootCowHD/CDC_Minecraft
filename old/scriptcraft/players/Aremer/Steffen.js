var utils = require ('utils');

exports.Steffen =function(){
  var d = new Drone(utils.getPlayerPos(self));

  d.down();
  d.box(blocks.stone,10,10,10);
  d.right(1);
  d.fwd(1);
  d.up();
  d.box(blocks.air,8,8,8);
  d.left();
  d.door();
  d.back();
  d.up(9);
  d.box(blocks.wood,10,1,10);

  for (var i=0;i<4;i++){
    d.right();
    d.up();
    d.box(blocks.wood,8-(2*i),1,10);
  }
//  events.projectileHit(onSteffenArrowHit);
}


var bkArrow = org.bukkit.entity.Arrow;    //sucht die Eigenschaften eines Pfeiles
var bkPlayer = org.bukkit.entity.Player;  //sucht die Eigenschaften von Spielern
var selector=require("/selector.js");     //JS Datei zum auswählen von Spielern
var entities = require('entities');       //Funktionen für Objekte
var spawn = require('spawn');             //Funktionen um Objekte zu spawnen

//
function onSteffenArrowHit(event){
  if(SteffenArrow){                       //Solange endersMode aktiv ist
    var projectile = event.entity;      //Hole die Projektil Alternative
    var world = event.world;            //Hole die Welt in der geschossen wurde
    var shooter = projectile.shooter;   //Hole den Schützen

    //Wenn das Projektil ein Pfeil und der Schütze ein Spieler ist
    if (projectile instanceof bkArrow && shooter instanceof bkPlayer){
        spawn(entities.zombie(), projectile.location ); //Spawne einen Zombie an der Stelle des Projektils
    }
  }
  else{
    this.unregister();  //Wenn endersMode nicht mehr Aktiv ist, entferne den Eventhandler
  }
}
