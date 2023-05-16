const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//@desc Create new contacts
//@route POST /api/cpntacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("the request body is:", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All feilds are amndatory")
    }
    const contact = await Contact.create({ name, email, phone });
    res.status(200).json(contact);
});

//@desc update contacts
//@route PUT /api/cpntacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});


//@desc Get specific contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
});



//@desc delete contacts
//@route DELETE /api/cpntacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
});




module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }
