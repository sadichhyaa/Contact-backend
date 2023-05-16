const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

//connecting to mongobd using link mentioned in .env
const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("db connected",
            connect.connection.host,
            connect.connection.name)
    }
    catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectdb