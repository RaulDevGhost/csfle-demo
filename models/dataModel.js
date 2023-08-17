const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    encryptedField: String
}, {
    collection: 'users' // Replace 'your_collection_name' with the actual collection name
});

module.exports = mongoose.models.Data || mongoose.model('Data', dataSchema);
