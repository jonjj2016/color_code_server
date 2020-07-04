const {
    authenticate
} = require('@feathersjs/authentication').hooks;
const {
    setField
} = require('feathers-authentication-hooks');
const authorize = require('../../hooks/authorize')
const log = require('../../hooks/log');
const authorize_user = require('../../hooks/authorize');


const incrementViews = require('../../hooks/increment_views');
const setUserId = setField({
    from: 'params.user._id',
    as: 'data.userId'
});
const limitToUser = setField({
    from: 'params.user._id',
    as: 'params.query.userId'
});

const setUser = require('../../hooks/set-user');

const clearPaletteId = require('../../hooks/clear_palette_id');

const addToUserpaletteList = require('../../hooks/add-to-userpalette-list');

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [authenticate('jwt'), log(), setUser()],
        update: [authenticate('jwt'), log(), authorize_user()],
        patch: [authenticate('jwt'), log(), authorize_user()],
        remove: [authenticate('jwt'), log(), authorize_user(), clearPaletteId()]
    },

    after: {
        all: [],
        find: [],
        get: [log()],
        create: [addToUserpaletteList()],
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