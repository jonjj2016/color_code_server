// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const {
    log
} = require("winston");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async(context) => {
        //  console.log(context.params);

        // const user = await context.params.user._id
        // console.log(user);
        // const {
        //     app,
        //     method,
        //     result,
        //     params
        // } = context;
        // console.log(result);

        return context;
    };
};