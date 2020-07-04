module.exports = function(app) {
    const modelName = 'users';
    const mongooseClient = app.get('mongooseClient');
    const schema = new mongooseClient.Schema({
        name: {
            type: String,
            lowercase: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true
        },
        role: {
            type: String,
            default: "user",
            enum: ["admin", "user"]
        },
        own_palettes: [],
        colors: [],
        own_gradients: [],
        liked_palettes: [],
        liked_gradients: [],
        password: {
            type: String
        },

        githubId: {
            type: String
        },

    }, {
        timestamps: true
    });

    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);

};