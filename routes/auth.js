const express = require('express');

const userController = require('../controllers/userController');

const app = express.Router();

app.get('/', userController.getAuthPage);
app.get('/github', userController.githubLogin);
app.get('/github/callback', userController.githubCallback);

module.exports = app;