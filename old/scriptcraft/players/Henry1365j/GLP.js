
/*

Vorläufug abgeschaltet, Siehe Beispiele unter Event Handlern

exports.GLP =function(){
// strike lightning wherever a player's arrow lands
var lightning = require('lightning');
events.projectileHit( function( event ){
  if ( entities.arrow( event.projectile ) // it's an arrow
       && entities.player( event.projectile.owner ) // it was shot by a player
     ) {
    lightning( event.projectile ); // strike lightning at the arrow location
  }
});}

*//*
