const googleTransAPI = require('../libs/google');

const { listLanguages } = googleTransAPI;

module.exports = {
    validToken: (req, res) => {
        res.ok();
    },
    getSupportedLangs: async (req, res) => {
        const result = await listLanguages();
        res.ok(result);
    }
};