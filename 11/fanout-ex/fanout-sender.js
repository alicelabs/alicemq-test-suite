const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = process.env.URI;

//test default exchange
//no exchange - default exchange
//no type 

const q = 'id557'; //queue name
const loopItterations = 200;
const window = 200;
const type = 'fanout';
const msg = 'hello i m pk'
const ex = 'pk-promise'


amqp.connect(uri, (err, conn) => {
  conn.createChannel((err, ch) => {
    ch.assertExchange('amq.fanout', 'fanout', {durable: true});
    setInterval(()=> {
      for (let i = 0 ; i < 50; i++){     
        ch.publish('amq.fanout', '', new Buffer.from(msg));
        console.log('sending');
      }
    }, window)
  });
});