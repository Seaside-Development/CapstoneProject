const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//api pathway
app.use('/api/jobrequests', require('./routes/jobrequestsRoutes'));

//pathway to the error
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));