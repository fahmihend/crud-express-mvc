const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    lastJobPosition: {
        type: String,
        required: true
    },
    lastJobCompany: {
        type: String,
        required: true
    },
    lastJobStartDate: {
        type: String,
        required: true
    },
    lastJobEndDate: {
        type: String,
        required: true
    },
    lastJobDescription: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('registrationForm', formSchema);

    