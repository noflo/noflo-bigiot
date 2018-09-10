const noflo = require('noflo');
const bigiot = require('bigiot-js');

const createConsumer = function(id, secret, api=0, cors=0)
{
  if (api == 0) { api=undefined }
  if (cors == 0) { cors=undefined } 
  return new bigiot.consumer(id, secret, api, cors);
}

const getParams = require('get-function-params');

console.log('p', getParams(createConsumer));

exports.getComponent = () => noflo.asComponent(createConsumer, {
  icon: null,
  description: 'Create BIG IoT Consumer',
  inports: {
    id: 'id',
    secret: 'secret',
    api: 'marketplace',
    cors: 'cors', 
  }
});
