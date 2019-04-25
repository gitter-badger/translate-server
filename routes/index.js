const express = require('express');
const path = require('path');

const open = require('./open');
const auth = require('./auth');
const api = require('./api');
const error = require('../middlewares/error');

module.exports = app => {
    app.get('/ping', (req, res) => res.ok('pong'));
    app.use('/open', open);
    app.use('/auth', auth);
    app.use('/api', api);

    if (['production', 'ci'].includes(process.env.NODE_ENV)) {
        app.use(express.static('client/build'));
      
        app.get('*', (req, res) => {
          res.sendFile(path.resolve('client', 'build', 'index.html'));
        });
    }
    
    app.use(error);
};