// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html


// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async context => {
        console.log("I am here");

        const data = await context.params.user.own_palettes.filter(item => {

            return item != context.arguments[0]
        })
        const res = await context.app.service('users').patch(context.params.user._id, {
            own_palettes: data
        })

        return context;
    };
};