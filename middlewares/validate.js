module.exports = validator => (req, res, next) => {
    const { error } = validator(req.body);
    if (error) return res.invalid(error.details[0].message);
    next();
};