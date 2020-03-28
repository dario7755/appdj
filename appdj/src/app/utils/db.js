const mongoose = require("mongoose");
const dbURI = require("../config/config").dbURI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
mongoose.set("debug", true);

mongoose.connection.on('connected', () => {
    console.log("Mongoose: connected to db");
});

mongoose.connection.on('error', (err) => {
    console.log("Mongoose: error - ", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose: disconnected to db");
});