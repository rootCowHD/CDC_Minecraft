var mqtt = require('sc-mqtt');
// create a new client
var client = mqtt.client( 'tcp://localhost:1883', 'AremerMqttClient1' );
// connect to the broker
client.connect( );
exports.setClient = function(host,id){
  client = mqtt.client(host,id);
}

exports.getClient = function(){
  return client;
}

exports.clientStart = function(){
  client.connect( );
}

/**/
