const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = process.env.URI;

//test default exchange
//no exchange - default exchange
//no type 

q = 'id557'; //queue name
loopItterations = 200;
window = 200;


amqp.connect(uri, (err, conn) => {
  conn.createChannel((err, ch) => {

    ch.assertQueue(q, {durable: false}); // message is not persistent
    setInterval(() => {
      for(let i = 0; i < loopItterations; i++){
        ch.sendToQueue(q, new Buffer.from(`${i}`), {persistent: false});
      }
      console.log("User Post sent");
    }, window)
  });
});