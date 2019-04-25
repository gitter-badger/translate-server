const fs = require('fs');
const AWS = require('aws-sdk');
const mime = require('mime-types')

const path = require('path');
const { promisify } = require('util');

const config = require('../config');

const BUCKET_NAME = 'tsq-translator';
const BUCKET_REGION = 's3-ap-northeast-1';
const { AWS_S3_KEY_ID, AWS_S3_ACCESS_KEY } = config;

AWS.config.update({ region: BUCKET_REGION });

const s3 = new AWS.S3({
    accessKeyId: AWS_S3_KEY_ID,
    secretAccessKey: AWS_S3_ACCESS_KEY
});

const s3DirectUpload = promisify(s3.upload);

module.exports = {
    s3: {
        getPreSignUrl: (folder, fileName) => {
            const contentType = mime(fileName);
            const key = `${folder}/${uuid()}_${fileName}`;
            const params = {
                Bucket: BUCKET_NAME,
                Key: key,
                ContentType: contentType,
                Expires: 60
            };

            return new Promise((resolve, reject) => {
                s3.getSignedUrl('putObject', params, (err, url) => {
                    if (err) {
                        return reject(err);
                    } else {
                        return {
                            key,
                            signUrl: url
                        };
                    }
                });    
            });
        },
        directUpload: async (filePath) => {
            const params = {
                Bucket: BUCKET_NAME,
                Key: path.basename(filePath),
                Body: fs.createReadStream(filePath)
            };
            const response = await s3DirectUpload(params);
            return response;
        },
        
        getObjectUrlByKey: (key) => {
            return `https://${BUCKET_REGION}.amazonaws.com/${BUCKET_NAME}/${key}`;
        }
    }
}