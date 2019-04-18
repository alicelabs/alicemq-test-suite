const fanoutReceiver = require('./fanout-ex/fanout-receiver') 
const fanoutSender = require('./fanout-ex/fanout-sender')
const topicReceiver = require('./topic-ex/topic-receiver')
const topicSender = require('./topic-ex/topic-sender')
const topicReceiver3 = require('./topic-ex/topic-reciever3')
const directSender = require('./direct-ex/direct-sender')
const directReceiver = require('./direct-ex/direct-receiver')
const defaultSender = require('./default-ex/default-sender')
const defaultReceiver = require('./default-ex/default-receiver')


fanoutSender.run();
fanoutReceiver.run();

directSender.run();
directReceiver.run();

topicSender.run();
topicReceiver.run();

defaultSender.run()
defaultReceiver.run()



