const noflo = require('noflo');

function accessSubscriptions(consumer, subscriptions, input = {}) {
  return Promise.all(subscriptions.map(sub => consumer.access(sub, input)));
}

exports.getComponent = () => noflo.asComponent(accessSubscriptions, {
  icon: null,
  description: 'Request data from a set of subscriptions',
});
