require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./database');
const apiRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());

app.use('/api', apiRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
