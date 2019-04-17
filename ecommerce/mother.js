const fanoutReceiver = require('../12/11/fanout-ex/fanout-receiver.js') 
const fanoutSender = require('../12/11/fanout-ex/fanout-sender')
const topicReceiver = require('../12/11/topic-ex/topic-receiver')
const topicSender = require('../12/11/topic-ex/topic-sender')
const topicReceiver2 = require('/Users/parker/Documents/codesmith/alice/alicemq-test-suite/11/topic-ex/topic-reciever3.js')

fanoutReceiver.connectToRabbit();
fanoutSender.connectToRabbit();
topicSender.run();
// topicReceiver.run();
topicReceiver2.run();




