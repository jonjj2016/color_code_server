const assert = require('assert');
const app = require('../../src/app');

describe('\'gradients\' service', () => {
  it('registered the service', () => {
    const service = app.service('gradients');

    assert.ok(service, 'Registered the service');
  });
});
