const registrationForm = require('../models/registrationForm-model');
const controller = {}

//make a function to get all the data from the database using try catch
controller.getData = async (req, res) => {
    try {
        const data = await registrationForm.find();
        res.render('index', {data: data})
    } catch (err) {
        res.json({ message: err });
    }
}

// make a functiont to post a data using try catch
controller.postData = async (req, res) => {
    try {
        const data = await registrationForm.create({
            fullName: req.body.fullName,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            lastJobPosition: req.body.lastJobPosition,
            lastJobCompany: req.body.lastJobCompany,
            lastJobStartDate: req.body.lastJobStartDate,
            lastJobEndDate: req.body.lastJobEndDate,
            lastJobDescription: req.body.lastJobDescription
        });
        res.status(200).json(data);
    } catch (err) {
        res.send(err);
    }
}

// make a function to delete a data using try catch
controller.deleteData = async (req, res) => {
    try {
        await registrationForm.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.send(err);
    }
}




module.exports = controller