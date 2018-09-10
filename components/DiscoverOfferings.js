const noflo = require('noflo');

function discoverOfferings(consumer, query) {
  return consumer.discover(query);
}

exports.getComponent = () => noflo.asComponent(discoverOfferings, {
  icon: null,
  description: 'Discover offers on marketplace that matches @query',
});
