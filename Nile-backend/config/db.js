const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://MartinA731:Mapinetas1@cluster0.sf4ya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;