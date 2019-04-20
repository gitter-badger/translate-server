const jwt = require('jsonwebtoken');
const config = require('../config');

const { JWT_KEY } = config;

exports.token = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.unAuth('token invalid');

    try {
        const decoded = jwt.verify(token, JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.unAuth('token invalid');
    }
};

exports.session = (req, res, next) => {
    const user = req.session.user;
    if (!user) {
        return res.unAuth('session invalid');
    } else {
        req.user = user;
        next();
    }
};