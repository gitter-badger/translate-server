const generateToken = require('../../utils/generateToken');

module.exports = {
    getToken: (req, res) => {
        const user = req.user;
        const token = generateToken(user);
        res.render('test', { token });
        // res.ok(token);
    }
};