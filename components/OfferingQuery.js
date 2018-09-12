const noflo = require('noflo');
const bigiot = require('bigiot-js');

function offeringQuery(category, options = {}) {
  const name = options.name || category;
  const query = new bigiot.offering(name, category);

  // Defaults to giving everything
  delete query.license;
  delete query.extent;
  delete query.price;

  Object.keys(options).forEach((key) => {
    query[key] = options[key];
  });

  return query;
}

exports.getComponent = () => noflo.asComponent(offeringQuery, {
  icon: null,
  description: 'Create Offering Query',
});
