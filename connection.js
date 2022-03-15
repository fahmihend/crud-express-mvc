//database connection
const mongoose = require('mongoose');

const databaseConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://urlfahmi:Rahasia01!@url-shortener.iwivc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser:true 
        });

        console.log('Database Connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    };
}

module.exports = databaseConnection;