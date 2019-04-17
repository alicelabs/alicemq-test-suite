const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = process.env.URI


//Receive messages on default exchange

const ex = 'amq.topic'
const queue = 'items page' //queue name


amqp.connect(uri, (err, conn) => {
  conn.createChannel((err, ch) => {
    ch.assertExchange(ex, 'topic', {durable: true})
    ch.assertQueue(queue, {exclusive: true}, function(err, q) {
      if (err) {
        console.log(err)
      }
      console.log(`[*] listening on queue: ${q}`);
      ch.bindQueue(q.queue, ex, '*.c')
      ch.consume(q.queue, function(msg) {
      console.log(" .-. >>", msg.content.toString());
  }, {noAck: true});

    })
    // ch.assertQueue(q, {durable: true}); // not durable/presistent message

 // no acknowledge means messages will "fire and forget"
  });
});