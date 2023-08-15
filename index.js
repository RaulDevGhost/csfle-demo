require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, DataModel } = require('./database'); // Import mongoose and DataModel from database.js

const app = express();
app.use(bodyParser.json());

app.post('/api/store', async (req, res) => {
    const encryptedField = req.body.encryptedField;

    const newData = new DataModel({ encryptedField });
    await newData.save();

    res.json({ message: 'Data stored successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
