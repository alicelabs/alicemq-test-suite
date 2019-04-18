const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config();
// const uri = process.env.URI;
const uri = 'amqp://test:test@192.168.0.236:5672'

//test default exchange
//no exchange - default exchange
//no type 
// console.log(uri)
// let q = 'aDirectQueue2'; //queue name

const script = {}

script.run = () => {
  let loopItterations = 1000;
  let window = 200;
  
  amqp.connect(uri, function(err, conn) {
    conn.createChannel(function(err, ch) {
      ch.assertExchange('amq.direct', 'direct')
      ch.assertQueue('users', {durable: false})
      setInterval(()=>{
  
        for (let i = 0; i < loopItterations; i++){
          // let oneOrZero = (i % 2)
          //ex - binding - message
          ch.sendToQueue('users',  new Buffer.from(`user ${i} logged in`), {persistent: false});
  
        }
        console.log(" [x] 'sent'")
      }, window)    
    });
  

  }); 
}

module.exports = script;