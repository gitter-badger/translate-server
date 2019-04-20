const express = require('express');

const apiAuthWithSessionRoute = require('./apiAuthWithSessionRoute');
const apiAuthWithTokenRoute = require('./apiAuthWithTokenRoute');

const app = express.Router();

app.use('/session', apiAuthWithSessionRoute);
app.use('/token', apiAuthWithTokenRoute);

module.exports = app;