const jwt = require('jsonwebtoken');
const config = require('../config');

const { JWT_KEY } = config;

module.exports = params => {
    const token = jwt.sign(params, JWT_KEY, { expiresIn: 60 * 60 * 24 * 365 }); // 1 year
    return token;  
};