const express = require('express');
const router = express.Router();
const DataModel = require('../models/dataModel');
const CryptoJS = require('crypto-js');

router.post('/store', async (req, res) => {
    try {
        const encryptedField = req.body.encryptedField;

        // Implement encryption logic here (using the `ENCRYPTION_KEY`)
        const encryptedData = encryptData(encryptedField, process.env.ENCRYPTION_KEY);

        const newData = new DataModel({ encryptedField: encryptedData });
        await newData.save();

        res.json({ message: 'Data stored successfully' });
    } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).json({ message: 'An error occurred while storing data' });
    }
});

// Encryption function using CryptoJS
function encryptData(data, key) {
    const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
    return encryptedData;
}

module.exports = router;
