const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
// const uri = process.env.URI
const uri = 'amqp://test:test@192.168.0.236:5672'

//Receive messages on default exchange



const script = {}

script.run = () => {

  q = 'users' //queue name
  amqp.connect(uri, (err, conn) => {
    conn.createChannel((err, ch) => {
  
      ch.assertQueue(q, {durable: false}); // not durable/presistent message
  
      console.log(`[*] listening on queue: ${q}`);
      ch.consume(q, function(msg) {
        console.log(" .-. >>", msg.content.toString());
      }, {noAck: true}); // no acknowledge means messages will "fire and forget"
    });
  });
}

module.exports = script;
