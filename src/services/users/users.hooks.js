const {
    authenticate
} = require("@feathersjs/authentication").hooks;

const {
    hashPassword,
    protect,
} = require("@feathersjs/authentication-local").hooks;
const {
    required,
    lowerCase,
} = require("feathers-hooks-common");
const log = require("../../hooks/log");

const populateUserPalettes = require("../../hooks/populate_user_palettes");

const setRole = require('../../hooks/set-role');

//
const createHooks = [lowerCase("email", "name", "password"), required("email", "name", "password"), hashPassword("password"), setRole()]
module.exports = {
    before: {
        all: [],
        find: [authenticate("jwt")],
        get: [authenticate("jwt"), ],
        create: [...createHooks],
        update: [hashPassword("password"), authenticate("jwt")],
        patch: [hashPassword("password"), authenticate("jwt")],
        remove: [authenticate("jwt")],
    },

    after: {
        all: [protect("password")],
        find: [],
        get: [populateUserPalettes()],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};