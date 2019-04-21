const moment = require('moment');

const friendTime = () => moment().format('YYYY-MM-DD_HH-mm-ss');

exports.friendTime = friendTime;