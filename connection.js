//database connection
const mongoose = require('mongoose');

const databaseConnection = async () => {
    try {
        await mongoose.connect('{{link to your mongodb collection}}',{
            useNewUrlParser:true 
        });

        console.log('Database Connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    };
}

module.exports = databaseConnection;
