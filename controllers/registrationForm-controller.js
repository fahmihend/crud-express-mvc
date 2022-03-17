const registrationForm = require('../models/registrationForm-model');
const controller = {}

//function to get a data by id using try catch
controller.getDataById = async (req, res) => {
    try {
        const data = await registrationForm.findById({
            _id: req.params.id
        })
        res.render('detail', {data: data})
    } catch (err) {
        res.json({ message: err });
    }
}

//function to get all the data from the database using try catch
controller.getData = async (req, res) => {
    try {
        const data = await registrationForm.find();
        res.render('index', {data: data})
    } catch (err) {
        res.json({ message: err });
    }
}

//function to update data using try catch
controller.updateData = async (req, res) => {
    try {
        const data = await registrationForm.findByIdAndUpdate({_id:req.params.id}, req.body, {
            new: true
        })
        res.redirect('/')
    } catch (err) {
        res.json({ message: err });
    }
}

//functiont to post a data using try catch
controller.postData = async (req, res) => {
    try {
        const data = await registrationForm.create({
            fullName: req.body.fullName,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            lastJobPosition: req.body.lastJobPosition,
            lastJobCompany: req.body.lastJobCompany,
            lastJobDescription: req.body.lastJobDescription,
            yearsOfExperiences: req.body.yearsOfExperiences
        });
        res.redirect('/');
    } catch (err) {
        res.send(err);
    }
}

//function to delete a data using try catch
controller.deleteData = async (req, res) => {
    try {
        await registrationForm.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.send(err);
    }
}




module.exports = controller