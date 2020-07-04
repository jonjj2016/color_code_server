const users = require('./users/users.service.js');
const palettes = require('./palettes/palettes.service.js');
const gradients = require('./gradients/gradients.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(palettes);
  app.configure(gradients);
};
