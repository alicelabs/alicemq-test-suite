const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = process.env.URI;

//test default exchange
//no exchange - default exchange
//no type 
const script = {}

script.run = ()=> {
let loopItterations = 20;
let window = 200;

amqp.connect(uri, function(err, conn) {
  conn.createChannel(function(err, ch) {

    setInterval(()=>{
        
      for (let i = 0; i < loopItterations; i++){
        ch.publish('amq.topic', 'georgia.c',  new Buffer.from(`${i}`, {persistent: false}));
      }
      console.log(" [x] Sent %s: '%s'", 'cyan', 'sent');
    }, window)    
  });

}); 

}
module.exports = script;