const generateToken = require('../../utils/generateToken');
const youdaoTransAPI = require('../../libs/youdao');
const baiduTransAPI = require('../../libs/baidu');
const googleAPI = require('../../libs/google');

const upload = require('../../utils/upload');
const visionAPI = require('../../libs/vision');
const log = require('../../utils/log');

const googleTransAPI = googleAPI.translateText;
const detectLanguage = googleAPI.detectLanguage;
const textDetection = visionAPI.textDetection;

module.exports = {
    validToken: (req, res) => {
        res.ok();
    },
    
    translate: async(req, res) => {
        const { detect, brand, body } = req.body;
        log.info('translate', req.body);
        let api = null;
        let params = body;
        let googleTo = body.to;

        if (detect) {
            const detectResult = await detectLanguage(body.q);
            log.info('detectResult:', {detectResult});
            googleTo = detectResult === 'en' ? detect : en
        } 
        if (brand === 'baidu') {
            api = baiduTransAPI;
        } else if (brand === 'youdao') {
            api = youdaoTransAPI;
        } else {
            api = googleTransAPI;
            params = {
                q: body.q,
                to: googleTo
            }
        }

        let response = await api(params);
        res.ok(response);
    },

    ocr: async(req, res) => {
        if (!req.file) return res.invalid('input invalid');
        const fileLocation = await upload(req.file.path);
        const data = await textDetection(fileLocation);
        res.ok(data);
    }
};