require('dotenv').config();
console.log('Loaded .env file:', process.env.MONGO_URI );
const mongoose = require('mongoose');

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch(error => {
        console.error('MongoDB Atlas connection error:', error);
    });

const DataSchema = new mongoose.Schema({
    encryptedField: String
});

const DataModel = mongoose.model('Data', DataSchema);

module.exports = { mongoose, DataModel }; // Export both mongoose and DataModel
