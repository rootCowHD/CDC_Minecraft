/**
var mqtt = require('own-mqtt.js');
var slash = require('slash');
// create a new client
var client = mqtt.getClient();
// connect to the broker

//  publish a message to the broker
//client.publish( 'minecraft', 'loaded' );
// subscribe to messages on 'arduino' topic
client.subscribe( 'Aremer/Minecraft/Input' );
//  do something when an incoming message arrives...
client.onMessageArrived( function( topic, message ) {
  if(topic=="Aremer/Minecraft/Input"){
    if(message =="day"){
      slash ("time set day");
    }
    else if(message =="night"){
      slash ("time set 18000");
    }
    else if(message =="clear"){
      slash ("weather clear");
    }
    else if(message =="rain"){
      slash ("weather rain");
    }
    else if(message =="thunder"){
      slash ("weather thunder");
    }
  }
  else{
    console.log( 'Message arrived: topic=' + topic + ', message=' + message );
  }
});
/**/
