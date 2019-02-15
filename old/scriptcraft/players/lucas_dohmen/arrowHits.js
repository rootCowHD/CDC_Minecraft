
/*

Vorläufug abgeschaltet, Siehe Beispiele unter Event Handlern

var fireworks = require('fireworks');

events.projectileHit(function (event) {
    var fireworkCount = 5;
    function launch() {
        fireworks.firework(event.entity.location);
        if (--fireworkCount) {
            setTimeout(launch, 2000);
        }
    }
    launch();

    event.entity.world.createExplosion(event.entity.location, 30.9);
});
/**/
