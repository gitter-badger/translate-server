const sha256 = require('js-sha256');
const axios = require('axios');
const qs = require('qs');

const config = require('../config');

const { YOUDAO_APP_KEY, YOUDAO_KEY } = config;

const appKey = YOUDAO_APP_KEY;
const key = YOUDAO_KEY;
const apiHost = 'http://openapi.youdao.com/api';

function getInput(input){
	if (input.length == 0) {
		return null;
	}
	var result;
	var len = input.length;
	if(len <= 20){
		result = input;
	}else{
		var startStr = input.substring(0,10);
		var endStr = input.substring(len-10,len);
		result = startStr + len +endStr;
	}
	return result;

}

const names = [];

/**
 * doc: https://ai.youdao.com/docs/doc-trans-api.s#p07
 * ref: https://github.com/command-line-tool/dictionary/blob/master/app.js
 * @param {*} params 
 */
const run = async (params) => {
    const from = params.from || 'zh-CHS';
    const to = params.to || 'en';
    const q = params.q;

    // if (!names.includes(from) || !names.includes(to) ) return new Error('lang not be supported.');
    if (!q) return new Error('q is required.');

    const salt = new Date().getTime();
    const curtime = Math.round(new Date().getTime()/1000);
    const str1 = appKey + getInput(q) + salt + curtime + key;
    
    const sign = sha256(str1);
    const config = { q, appKey, salt, from, to, curtime, sign, signType: 'v3' };

    try {
        const response =  await axios({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(config),
            url: apiHost
        })
        const { data } = response;
        // data format: https://ai.youdao.com/docs/doc-trans-api.s#p05
        return data;
    } catch (error) {
        throw error;
    }
};

module.exports = run;