// Initializes the `palettes` service on path `/palettes`
const { Palettes } = require('./palettes.class');
const createModel = require('../../models/palettes.model');
const hooks = require('./palettes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/palettes', new Palettes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('palettes');

  service.hooks(hooks);
};
