const noflo = require('noflo');

function authenticateConsumer(consumer) {
  return consumer.authenticate().then(() => consumer);
}

exports.getComponent = () => noflo.asComponent(authenticateConsumer, {
  icon: null,
  description: 'Authenticate a BIG IoT Consumer against Marketplace',
});
