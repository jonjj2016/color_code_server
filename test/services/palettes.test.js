const assert = require('assert');
const app = require('../../src/app');

describe('\'palettes\' service', () => {
  it('registered the service', () => {
    const service = app.service('palettes');

    assert.ok(service, 'Registered the service');
  });
});
