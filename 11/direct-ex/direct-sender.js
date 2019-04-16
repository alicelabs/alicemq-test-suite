const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = process.env.URI;

//test default exchange
//no exchange - default exchange
//no type 

// let q = 'aDirectQueue2'; //queue name
let loopItterations = 200;
let window = 200;

amqp.connect(uri, function(err, conn) {
  conn.createChannel(function(err, ch) {

    var binding = ['cyan', 'orange']
 
  // queue.name - options
    ch.assertQueue('cyan', {})
    setInterval(()=>{

      for (let i = 0; i < loopItterations; i++){
        // let oneOrZero = (i % 2)
        //ex - binding - message
        ch.publish('amq.direct', 'cyan',  new Buffer.from(`${i}`));

      }
      console.log(" [x] Sent %s: '%s'", 'cyan', 'sent');
    }, window)    
  });

  // setTimeout(function() { conn.close(); process.exit(0) }, 500);
}); 