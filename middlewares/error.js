const log = require('../utils/log');

module.exports = (err, req, res, next) => {
    console.error('error during handling request:\n', err);
    res.error('Something failed');
};