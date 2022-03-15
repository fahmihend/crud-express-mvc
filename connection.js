//database connection
const mongoose = require('mongoose');

const databaseConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://fahmi1:Rahasia01@cluster0.ics41.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser:true 
        });

        console.log('Database Connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    };
}

module.exports = databaseConnection;