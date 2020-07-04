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
        //console.log(76767767, result);

        if (params.user) {
            const addPalette = async(paletteId) => {
                try {

                    const my_palette = await app.service("palettes").get(paletteId);
                    //console.log(my_palette);
                    return my_palette;
                } catch (err) {
                    return
                }
            };

            result.own_palettes = await Promise.all(result.own_palettes.map(addPalette));

        }

        return context;
    };
};