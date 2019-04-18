
const amqp = require('amqplib/callback_api');
const uri = 'amqp://test:test@192.168.0.236:5672'
// const uri = process.env.CLOUD_AMQP

const script = {}

script.run = () => { 
  amqp.connect(uri, (err, conn) => {
    conn.createChannel((err, ch) => {
  
      const ex = 'amq.fanout';
      
      ch.assertQueue('email', {durable: false}, (err, q)=> {
        console.log('.-. waiting for messages', q.queue);
        
        //arguments: queueName  - exchangeName - key
        ch.bindQueue(q.queue, ex, 'successful_txn');
        ch.consume(q.queue, function(msg){
          if (msg.content) {
            console.log('message:', msg.content.toString())
          } 
        }, {noAck: true})
      })
  
      
  
     
      // })
      
    })
    conn.createChannel((err, ch) => {
      const ex = 'amq.fanout';
  
    ch.assertQueue('inventory', {durable: false}, (err, q)=> {
      console.log('.-. waiting for messages', q.queue);
      
      //arguments: queueName  - exchangeName - key
      ch.bindQueue('inventory', ex, 'successful_txn');
      ch.consume(q.queue, function(msg){
        if (msg.content) {
          console.log('message:', msg.content.toString())
        } 
      }, {noAck: true})
    })
    })
  
    conn.createChannel((err, ch) => {
      const ex = 'amq.fanout';
  
     ch.assertQueue('accounting', {durable: false}, (err, q)=> {
        console.log('.-. waiting for messages', q.queue);
        
        //arguments: queueName  - exchangeName - key
        ch.bindQueue(q.queue, ex, 'successful_txn');
        ch.consume(q.queue, function(msg){
          if (msg.content) {
            console.log('message:', msg.content.toString())
          } 
        }, {noAck: true})
    })
  })


  conn.createChannel((err, ch) => {
    const ex = 'amq.fanout';

  ch.assertQueue('shipping', {durable: false}, (err, q)=> {
    console.log('.-. waiting for messages', q.queue);
    
    //arguments: queueName  - exchangeName - key
    ch.bindQueue('shipping', ex, 'successful_txn');
    ch.consume(q.queue, function(msg){
      if (msg.content) {
        console.log('message:', msg.content.toString())
      } 
    }, {noAck: true})
  })
  })
  })
  
}

module.exports = script;