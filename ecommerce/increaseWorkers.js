const directReceiver = require('./direct-ex/direct-receiver')
const defaultReceiver = require('./default-ex/default-receiver')
const fanoutReceiver = require('./fanout-ex/fanout-receiver') 
const topicReceiver = require('./topic-ex/topic-receiver')
const topicReceiver3 = require('./topic-ex/topic-reciever3')


// defaultReceiver.run()
// defaultReceiver.run()
topicReceiver.run()
// topicReceiver3.run()
// fanoutReceiver.run()
// fanoutReceiver.run()
// directReceiver.run()
directReceiver.run()
directReceiver.run()

