// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async context => {
        const {
            app,
            method,
            data,
            params
        } = context;
        const palette = await app.service("palettes").get(context.arguments[0])
        const user = await app.service('users').get(params.user._id)
        if (palette.author == params.user._id || user.role === 'admin') {
            return context
        } else {
            throw new Error("you are not alowed")
        }

    };
};