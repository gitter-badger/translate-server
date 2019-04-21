const path = require('path');
// setup google env var
// doc: https://cloud.google.com/translate/docs/quickstart-client-libraries
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve(__dirname, 'google-auth.json');
require('express-async-errors');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const addonResponse = require('express-addon-response');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

const log = require('./utils/log');
const routes = require('./routes');
const config = require('./config');


const app = express();
const { MONGO_URL, NODE_ENV, SESSION_SECRET } = config;

// set up database
const initDb = () => {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', error => {
        console.error('mongodb connection error', error);
    });
    db.on('open', () => {
        console.log('mongodb connection ok!');
    });
};

initDb();

// error handle
process.on('unhandledRejection', ex => {
    console.error('%s from unhandledRejection', chalk.red('Error:'));
    throw ex;
});

process.on('uncaughtException', async ex => {
    console.error('%s from uncaughtException', chalk.red('Error:'));
    if (NODE_ENV === 'production') {
        log.error('uncaughtException', ex);
    } else {
        console.error(ex);
    }

    process.exit(1);
});

// set up middleware
app.set('trust proxy', 1);
app.use(addonResponse);

// const day = 30 * 24 * 3600 * 1000;
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    // expires: new Date(Date.now() + day),
    // maxAge: day,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { secure: NODE_ENV === 'production' ? true: false }
}));

app.set('json spaces', 2);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/apidoc', express.static('public/apidoc'));

// setup routes
routes(app);

module.exports = app;