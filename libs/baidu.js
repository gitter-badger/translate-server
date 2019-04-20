const MD5 = require('blueimp-md5');
const axios = require('axios');

const config = require('../config');

const { BAIDU_APP_ID, BAIDU_APP_KEY } = config;

const appid = BAIDU_APP_ID;
const key = BAIDU_APP_KEY;
const apiHost = 'http://api.fanyi.baidu.com/api/trans/vip/translate'

/**
 * 
 * doc: http://api.fanyi.baidu.com/api/trans/product/apidoc
 * acount: 17705143392/tsq.......
 */

const langs = [ { name: 'auto', label: '自动检测' },
  { name: 'zh', label: '中文' },
  { name: 'en', label: '英语' },
  { name: 'yue', label: '粤语' },
  { name: 'wyw', label: '文言文' },
  { name: 'jp', label: '日语' },
  { name: 'kor', label: '韩语' },
  { name: 'fra', label: '法语' },
  { name: 'spa', label: '西班牙语' },
  { name: 'th', label: '泰语' },
  { name: 'ara', label: '阿拉伯语' },
  { name: 'ru', label: '俄语' },
  { name: 'pt', label: '葡萄牙语' },
  { name: 'de', label: '德语' },
  { name: 'it', label: '意大利语' },
  { name: 'el', label: '希腊语' },
  { name: 'nl', label: '荷兰语' },
  { name: 'pl', label: '波兰语' },
  { name: 'bul', label: '保加利亚语' },
  { name: 'est', label: '爱沙尼亚语' },
  { name: 'dan', label: '丹麦语' },
  { name: 'fin', label: '芬兰语' },
  { name: 'cs', label: '捷克语' },
  { name: 'rom', label: '罗马尼亚语' },
  { name: 'slo', label: '斯洛文尼亚语' },
  { name: 'swe', label: '瑞典语' },
  { name: 'hu', label: '匈牙利语' },
  { name: 'cht', label: '繁体中文' },
  { name: 'vie', label: '越南语' } ];

const names = langs.map(l => l.name);

const run = async (params) => {
    const from = params.from || 'auto';
    const to = params.to || 'en';
    const q = params.q;

    if (!names.includes(from) || !names.includes(to) ) return new Error('lang not be supported.');
    if (!q) return new Error('q is required.');

    const salt = (new Date).getTime();
    const strToBeMD5 = appid + q + salt + key;
    const sign = MD5(strToBeMD5);
    const config = { q, from, to, salt, appid, sign };
    try {
        const response =  await axios.get(apiHost, { params: config });
        const { data } = response;
        const dst = data['trans_result'][0].dst;
        return dst;
    } catch (error) {
        throw error;
    }
};

module.exports = run;