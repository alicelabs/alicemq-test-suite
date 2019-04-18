const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = 'amqp://test:test@192.168.0.236:5672'


//Receive messages on default exchange

const ex = 'amq.topic'
const queue = 'inventory' //queue name


amqp.connect(uri, (err, conn) => {
  conn.createChannel((err, ch) => {
    ch.assertQueue(queue, {durable: false}, function(err, q) {
      if (err) {
        console.log(err)
      }
      console.log(`[*] listening on queue: ${q}`);
      ch.bindQueue(q.queue, ex, '*.c')
      ch.consume(q.queue, function(msg) {
      console.log(" .-. >>", msg.content.toString());
  }, {noAck: false});

    })
    // ch.assertQueue(q, {durable: true}); // not durable/presistent message

 // no acknowledge means messages will "fire and forget"
  });
});