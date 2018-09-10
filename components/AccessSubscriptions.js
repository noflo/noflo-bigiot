const noflo = require('noflo');

function accessSubscriptions(consumer, subscriptions, input={}) {
  console.log('access', consumer, subscriptions);
  const access = (sub) => {
    return consumer.access(sub, input);
  };

  return Promise.all(subscriptions.map(access));
}

exports.getComponent = () => noflo.asComponent(accessSubscriptions, {
  icon: null,
  description: 'Request data from a set of subscriptions',
});
