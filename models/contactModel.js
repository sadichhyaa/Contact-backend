const mongoose = require("mongoose");


//creating mongoose object to pass to mongobd.
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add contact name"]
    },
    email: {
        type: String,
        required: [true, "please add the contact email address"]
    },
    phone: {
        type: String,
        required: [true, "please add the contact phone number"]
    }
}, {
    timestamps: true
})

//creating module for contactSchema
module.exports = mongoose.model("Contact", contactSchema)