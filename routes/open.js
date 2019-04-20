const express = require('express');

const auth = require('../middlewares/auth');
const openController = require('../controllers/openController');

const app = express.Router();

app.get('/validToken', auth.token, openController.validToken);
app.get('/getSupportedLangs', openController.getSupportedLangs);

module.exports = app;