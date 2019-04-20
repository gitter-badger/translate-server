const generateToken = require('../../utils/generateToken');
const youdaoTransAPI = require('../../libs/youdao');
const baiduTransAPI = require('../../libs/baidu');
const googleTransAPI = require('../../libs/google').translateText;

module.exports = {
    validToken: (req, res) => {
        res.ok();
    },
    
    translate: async(req, res) => {
        const { from, to, q } = req.body;
        if (!from || !to || !q) return res.invalid('params is missing');

        let result = null;
        if (from === 'zh' && to === 'en') {
            const data = await youdaoTransAPI(Object.assign({}, req.body, { from: 'zh-CHS' }));
            result = data;
        } else if (from === 'zh' || to === 'zh') {
            const data = await baiduTransAPI(req.body);
            result = data;
        } else {
            const data = await googleTransAPI(req.body);
            result = data;
        }
        res.ok(result);
    }
};