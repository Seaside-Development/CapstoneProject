const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// check that app is running on production mode
if (process.env.NODE_ENV === 'production') {
    //forces https on the website
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

//api pathway
app.use('/api/jobrequests', require('./routes/jobrequestsRoutes'));

//pathway to the error
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));