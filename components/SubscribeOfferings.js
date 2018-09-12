const noflo = require('noflo');

function subscribeOfferings(consumer, offerings) {
  const subscribeOffer = (offer) => {
    const id = (typeof offer === 'string') ? offer : offer.id;
    return consumer.subscribe(id);
  };

  return Promise.all(offerings.map(subscribeOffer));
}

exports.getComponent = () => noflo.asComponent(subscribeOfferings, {
  icon: null,
  description: 'Subscribe to a set of offerings',
});
