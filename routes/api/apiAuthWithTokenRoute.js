const express = require('express');

const auth = require('../../middlewares/auth');
const apiControllerAuthWithToken = require('../../controllers/api/authWithTokenController');

const app = express.Router();

app.use(auth.token);
app.get('/validToken', apiControllerAuthWithToken.validToken);
app.post('/translate', apiControllerAuthWithToken.translate);

module.exports = app;