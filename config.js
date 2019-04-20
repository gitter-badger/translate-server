const env = process.env;
const NODE_ENV = env.NODE_ENV || 'development';
const PORT = env.PORT || 4000;
const JWT_KEY = env.JWT_KEY || 'translate';

const { 
    GITHUB_CLIENT_ID, 
    GITHUB_CLIENT_SECRET, 
    SESSION_SECRET,
    BAIDU_APP_ID,
    BAIDU_APP_KEY,
    YOUDAO_APP_KEY,
    YOUDAO_KEY
} = env;

const common = {
    PORT,
    NODE_ENV,
    JWT_KEY,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    SESSION_SECRET,
    BAIDU_APP_ID,
    BAIDU_APP_KEY,
    YOUDAO_APP_KEY,
    YOUDAO_KEY
};

const config = {
    development: {
        MONGO_URL: 'mongodb://localhost:27017/translate_dev',
        LOG_LEVEL: 'debug',
        HOST_NAME: `http://localhost:${PORT}`
    },
    production: {
        MONGO_URL: 'mongodb//mongo:27017/translate',
        LOG_LEVEL: 'error',
        HOST_NAME: 'https://translate.tsq.me'
    }
};

module.exports = Object.assign({}, common, config[NODE_ENV]);