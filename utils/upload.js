const fs = require('fs');
const AWS = require('aws-sdk');

const path = require('path');
const { promisify } = require('util');

const config = require('../config');

const { AWS_S3_KEY_ID, AWS_S3_ACCESS_KEY } = config;

AWS.config.update({ region: "ap-northeast-1" });

const s3 = new AWS.S3({
    accessKeyId: AWS_S3_KEY_ID,
    secretAccessKey: AWS_S3_ACCESS_KEY
});

const readFile = promisify(fs.readFile);
const upload = promisify(s3.upload);


module.exports = async (filePath) => {
    try {
        const data = await readFile(filePath);
        const params = {
            Bucket: 'tsq-translator', // pass your bucket name
            Key: path.basename(filePath),
            Body: fs.createReadStream(filePath),
            ACL: 'public-read'
        };
        return new Promise((resolve, reject) => {
            s3.upload(params, (err, data) => {
                if (err) { reject(err) } else {
                    resolve(data.Location);
                }
            })
        });
    } catch (error) {
        console.log(error);
    }

};
