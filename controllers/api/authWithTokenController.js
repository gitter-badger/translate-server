const uuid = require('uuid/v1');

const generateToken = require('../../utils/generateToken');
const youdaoTransAPI = require('../../libs/youdao');
const baiduTransAPI = require('../../libs/baidu');
const googleAPI = require('../../libs/google');

const { getPreSignUrl, getObjectUrlByKey } = require('../../utils/aws').s3;
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
        const { key } = req.query;
        const fileUrl = getObjectUrlByKey(key);
        const result = await textDetection(fileUrl);
        res.ok(result);
    },

    getPreSignUrl: async (req, res) => {
        const { fileName } = req.query;
        const result = await getPreSignUrl(req.user.oid, fileName);
        res.json(result);
    }
};