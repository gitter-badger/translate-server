const mongoose = require('mongoose');

module.exports = (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.invalid('input invalid');
    req.id = id;
    next();
};