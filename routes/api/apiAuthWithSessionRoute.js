const express = require('express');

const auth = require('../../middlewares/auth');
const apiControllerAuthWithSession = require('../../controllers/api/authWithSessionController');

const app = express.Router();

app.use(auth.session);

app.get('/getToken', apiControllerAuthWithSession.getToken);

module.exports = app;