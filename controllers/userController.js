const axios = require('axios');
const uuid = require('uuid');

const config = require('../config');
const log = require('../utils/log');
const User = require('../models/user');

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, HOST_NAME } = config;

module.exports = {
    getAuthPage: (req, res) => {
        log.info('session', req.session.user);
        res.render('auth');
    },

    githubLogin: (req, res) => {
        // auth doc: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ 
        // scope doc: https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
        const url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${HOST_NAME}/auth/github/callback&scope=read:user&state=${uuid.v1()}`;
        res.redirect(url);
    },

    githubCallback: async (req, res) => {
        const query = req.query;
        const url = `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${query.code}`;
        log.info('githubCallback:url', { url });
        const response = await axios({
            method: 'POST',
            url,
            headers: {
                accept: 'application/json'
           }
        });
        const data = response.data;
        const { access_token } = data;
        log.info('githubCallback:access_token', { access_token });

        const userInfoResponse = await axios({
            method: 'GET',
            url: 'https://api.github.com/user',
            headers: {
				Authorization: 'token ' + access_token
           }
        });
        const userInfo = userInfoResponse.data;
        const { name, id, avatar_url, email } = userInfo;
        let user = await User.findOne({ oid: id });

        if (!user) {
            user = new User({
                username: name,
                avatar: avatar_url,
                email: email,
                oid: id,
                profile: userInfo
            });
            await user.save();
            log.info('user created successfully');
        } else {
            log.info('user has been existed');
        }

        req.session.user = { name, oid: id };
        res.redirect('/api/session/getToken');
        // res.ok(user);
    }
}