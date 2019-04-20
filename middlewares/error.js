const log = require('../utils/log');

module.exports = (err, req, res, next) => {
    log.error('error during handling request:\n', err);
    res.error('Something failed');
};