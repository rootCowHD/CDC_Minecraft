
/*

Vorläufug abgeschaltet, Siehe Beispiele unter Event Handlern
var fireworks = require('fireworks');


if (typeof endersMode === 'undefined' || endersMode === null){  //Sollte die Variable endersMode nicht vorhanden sein
  var slash = require('slash');                                 //lädt das Slash Plugin
  slash("js var endersMode=true");                             //und legt diese im Namen des Servers an (mit dem Wert false)
  slash("js var store=persist('enders',{players:{ } } );");

}
events.projectileHit(function (event) {
    var fireworkCount = 5;
    function launch() {
        fireworks.firework(event.entity.location);
        if (--fireworkCount) {
            setTimeout(launch, 2000);
        }
    }
    launch();

    event.entity.world.createExplosion(event.entity.location, 500.9);

	if(!...){
		this.unregister();
	}
});
/**/
