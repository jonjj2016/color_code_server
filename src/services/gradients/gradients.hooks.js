const {
    authenticate
} = require('@feathersjs/authentication').hooks;
const setUser = require('../../hooks/set-user');
module.exports = {
    before: {
        all: [],
        // all: [ authenticate('jwt') ],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};