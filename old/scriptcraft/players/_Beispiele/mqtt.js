/** MQTT Beispiel
 * MQTT ist ein Protokoll welches in vielen Smart Home Anwendungen verwendet wird
 * Hierbei gibt es einen Server (Broker) welche alle Anfragen bearbeitet
 *
 * Eine Anfrage ist entweder das Eintragen einer Nachricht unter einer Überschrift
 * Dies wird publishen genannt
 *
 * ODER ein Client z.B. unser Minecraft Server, ein Handy oder ein anderes Gerät (sogar Kühlschränke)
 * möchte Informiert werden, wenn unter einer Überschrift (topic) eine neue Nachricht (message) geschriebn wurde
 *
 * Also ein Forum für Smarthome Geräte
 *
 * Normalerweise wird der MQTT Server gesichert, da aber nur Minecraft auf diesen zugreift,
 * ist unser Server nicht geschützt, dadurch kann jeder darauf zugreifen und Nachrichten senden.
 **/

// folgende Zeile wird benötigt um MQTT zu verwenden
var mqtt = require('own-mqtt.js');

// client ist unsere Variabele, mit welcher wir Nachrichten schreiben und / oder empfangen können
var client = mqtt.getClient();
client.subscribe( 'Spielername' );    // Der subscribe Befehl veranlasst den MQTT Server immer dann eine Nachricht
client.subscribe( 'andereTopic' );    // An Minecraft zu senden, wenn in einer gewünschten Topic neue Nachrichten auftauchen
client.subscribe( 'Spielername/unterTopic' ); // Hier können wir beliebig viele Topics und mit / auch unter Topics auswählen

// Es bietet sich hier an, den Spielernamen als Topic zu verwenden,

// Jedes mal wenn eine neue Nachricht auftaucht, wird folgendes Event aufgerufen
// Hier muss nichts weiter im Rahmen von Events beachtet werden, dafür ist die mqtt Variabele zuständig
client.onMessageArrived( function( topic, message ) { //Es gibt immer eine message in einer topic
  if(topic == "Spielername"){ // Z.B. kann man seinen Spielernamen als topic nehmen
    if(message == "hi"){  // Und dann bei der Nachricht "hi" einen Befehl ausführen
      //Hier Befehle eingeben
    }
    else if(message == "andereNachricht"){ // Die Nachricht kann dabei beliebig sein
      //Anderer Befehl
    }
  }
  else if(topic=="andereTopic"){  // Ebenso kann die Topic beliebig sein
    client.publish( "wiederEineAndereTopic", "neueNachricht" ); // und dieser publish Befehl?
    // Der schreibt in "wiederEineAndereTopic" eine "neueNachricht", welche dann wiederrum ausgelesen werden könnte
  }
}
