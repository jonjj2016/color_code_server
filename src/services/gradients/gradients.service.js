// Initializes the `gradients` service on path `/gradients`
const { Gradients } = require('./gradients.class');
const createModel = require('../../models/gradients.model');
const hooks = require('./gradients.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/gradients', new Gradients(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('gradients');

  service.hooks(hooks);
};
