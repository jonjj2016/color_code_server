// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async context => {
        console.log(900909090);

        const {
            app,
            method,
            params,
            data
        } = context;
        //  console.log(result);
        if (params.user._id) {
            console.log("id", params.user._id);
            console.log(data);
            data.author = params.user._id

            // result.author = params.user._id



        }


        return context;
    };
};