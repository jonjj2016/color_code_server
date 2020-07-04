// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async context => {
        const {
            app,
            method,
            result,
            params
        } = context;
        const user = await app.service('users').get(result.author)
        const mydata = [...user.own_palettes, result._id]
        const res = await app.service('users').patch(result.author, {
            own_palettes: mydata
        })
        return context;
    };
};