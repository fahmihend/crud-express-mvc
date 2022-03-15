const registrationForm = require('../models/registrationForm-model');
const controller = {}

//make a function to get all the data from the database using try catch
controller.getData = async (req, res) => {
    try {
        const data = await registrationForm.find();
        console.log(data)
        //return the data as a json and add count data
        res.status(200).json({
            data,
            count: data.length
        });
    } catch (err) {
        res.json({ message: err });
    }
}

// make a functiont to post a data using try catch
controller.postData = async (req, res) => {
    try {
        // const firstName = req.body.firstName;
        const data = await registrationForm.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            lastJobPosition: req.body.lastJobPosition,
            lastJobCompany: req.body.lastJobCompany,
            lastJobStartDate: req.body.lastJobStartDate,
            lastJobEndDate: req.body.lastJobEndDate,
            lastJobDescription: req.body.lastJobDescription
        });
        console.log('data', firstName);
        res.status(200).json(data);
    } catch (err) {
        res.send(err);
    }
}

module.exports = controller