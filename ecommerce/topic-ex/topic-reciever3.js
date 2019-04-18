const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
// const uri = process.env.URI
const uri = 'amqp://test:test@192.168.0.236:5672'

//Receive messages on default exchange

const script = {}
script.run = () => {

  const ex = 'amq.topic'
  const queue = 'inventory' //queue name

    amqp.connect(uri, (err, conn) => {
      conn.createChannel((err, ch) => {
          ch.bindQueue(queue, ex, '*.c')
          ch.consume(queue, function(msg) {
          console.log(" .-. >>", msg.content.toString());
        }, {noAck: false})
        // ch.assertQueue(q, {durable: true}); // not durable/presistent message

      // no acknowledge means messages will "fire and forget"
      });
    });
}

module.exports = script;