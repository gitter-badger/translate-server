const express = require('express');
const path = require('path');

const friendTime = require('../../utils/date').friendTime;
const auth = require('../../middlewares/auth');
const apiControllerAuthWithToken = require('../../controllers/api/authWithTokenController');

const app = express.Router();

app.use(auth.token);
app.get('/validToken', apiControllerAuthWithToken.validToken);
app.post('/translate', apiControllerAuthWithToken.translate);
app.post('/ocr', apiControllerAuthWithToken.ocr);

module.exports = app;