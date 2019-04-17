const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = process.env.URI


//Receive messages on default exchange

ex = 'amq.direct'
q = 'cyan' //queue name


amqp.connect(uri, (err, conn) => {
  conn.createChannel((err, ch) => {

    ch.assertQueue(q, {durable: true}); // not durable/presistent message

    console.log(`[*] listening on queue: ${q}`);
    ch.consume(q, function(msg) {
    console.log(" .-. >>", msg.content.toString());
}, {noAck: true}); // no acknowledge means messages will "fire and forget"
  });
});