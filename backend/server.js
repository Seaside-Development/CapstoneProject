const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));