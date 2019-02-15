var bkArrow = org.bukkit.entity.Arrow; //Speichert wie ein Pfeil aussehen soll
var bkPlayer = org.bukkit.entity.Player;  //sucht die Eigenschaften von Spielern

var entities = require('entities'); //Funktionen für Objekte


exports.Pfeile =function()
{
  var slash = require('slash');                                 //lädt das Slash Plugin
  slash("js var explosionsPfeile=true");                             //und legt diese im Namen des Servers an (mit dem Wert false)
  events.projectileHit(onJustinho07ArrowHit);
}

function  onJustinho07ArrowHit(event){
  if(explosionsPfeile){
    var projectile = event.entity;      //Hole die Projektil Alternative
    var world = event.world;            //Hole die Welt in der geschossen wurde
    var shooter = projectile.shooter;   //Hole den Schützen

    if (projectile instanceof bkArrow && shooter instanceof bkPlayer)
      projectile.location.world.createExplosion(projectile.location, 8.0);
  }
  else{
    this.unregister();  //Wenn endersMode nicht mehr Aktiv ist, entferne den Eventhandler
  }
}
