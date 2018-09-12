const noflo = require('noflo');
const bigiot = require('bigiot-js');

function createConsumer(id, secret, api = 0, cors = 0) {
  const marketplace = (api === 0) ? undefined : api;
  const corsProxy = (cors === 0) ? undefined : cors;
  return new bigiot.consumer(id, secret, marketplace, corsProxy);
}

exports.getComponent = () => noflo.asComponent(createConsumer, {
  icon: null,
  description: 'Create BIG IoT Consumer',
});
