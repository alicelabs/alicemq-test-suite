const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
const uri = process.env.URI;

//test default exchange
//no exchange - default exchange
//no type 

const script = {}

script.connectToRabbit = () => {

  const q = 'id557'; //queue name
  const loopItterations = 200;
  const window = 200;
  const type = 'fanout';
  const msg = 'hello i m pk'
  const ex = 'amq.fanout'
  
  
  amqp.connect(uri, (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertExchange(ex, 'fanout', {durable: true});
      setInterval(()=> {
        for (let i = 0 ; i < 5000; i++){     
          ch.publish('amq.fanout', 'successful_txn', new Buffer.from(msg));
          console.log('sending');
        }
      }, window)
    });
  });
}

module.exports = script;