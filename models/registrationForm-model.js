const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fullName: {
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
        // required: true
    },
    lastJobCompany: {
        type: String,
        // required: true
    },
    lastJobDescription: {
        type: String,
        // required: true
    },
    yearsOfExperiences: {
        type: String,
        // required: true
    },
});

module.exports = mongoose.model('registrationForm', formSchema);

    