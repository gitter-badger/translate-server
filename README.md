# TRANSLATE-SERVER

- [![](https://travis-ci.org/tsq-cli/translate-server.svg?branch=master)](https://travis-ci.org/tsq-cli/translate-server) 
- [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)
- [![Inline docs](http://inch-ci.org/github/tsq-cli/translate-server.svg?branch=master)](http://inch-ci.org/github/tsq-cli/translate-server) 
- [![Dependency Status](https://david-dm.org/tsq-cli/translate-server.svg)](https://david-dm.org/tsq-cli/translate-server)  
- [![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://eslint.org "JavaScript The Good Parts")
- [![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)
- [![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-auth-jwt2.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-auth-jwt2?branch=master)
- [![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.svg)](https://codeclimate.com/github/dwyl/esta)
- [![devDependencies Status](https://david-dm.org/dwyl/hapi-auth-jwt2/dev-status.svg)](https://david-dm.org/dwyl/hapi-auth-jwt2?type=dev) 
- [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
- [![Join the chat at https://gitter.im/dwyl/chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dwyl/chat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Join the chat at https://gitter.im/translate-server/community](https://badges.gitter.im/translate-server/community.svg)](https://gitter.im/translate-server/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Building a custom translator.

### Prepare

create the below files in project root directory.

- `.env` for env variables.
- `google-auth.json` for google api auth.

### Run

- local development: `npm start`
- production deployment: `docker-compose up -d`

### IT Stacks

- Github OAuth
- Nodejs
- Mongodb
- Session Auth
- JWT Auth
- Docker && docker-compose
- AWS Route53
- AWS EC2
- AWS S3

### Site point

- doc: http://translate.i-aws.com/apidoc
- management: http://translate.i-aws.com
- about: http://translate.i-aws.com/about

### Thank you

 - https://www.sohamkamani.com/blog/javascript/2018-06-24-oauth-with-node-js/
 - https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04
 - https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose
 - nginx support https: https://medium.com/@pentacent/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71
 - reacti18n: https://github.com/i18next/react-i18next
 - upload file using axios: https://stackoverflow.com/questions/53038900/nodejs-axios-post-file-from-local-server-to-another-server
 - docker-compose: https://docs.docker.com/compose/install/
 - multi commands with ssh: https://www.cyberciti.biz/faq/linux-unix-osx-bsd-ssh-run-command-on-remote-machine-server/ 
 - google vision face: https://cloud.google.com/vision/#industry-leading-accuracy-for-image-understanding
 - node camera: https://github.com/chuckfairy/node-webcam#readme
 - serial-number: https://github.com/es128/serial-number
 - serverless upload: https://read.acloud.guru/how-to-add-file-upload-features-to-your-website-with-aws-lambda-and-s3-48bbe9b83eaa
 - mongodb command: https://www.cnblogs.com/wpjzh/p/5999363.html
 ### Note

docker link:

 ```sh
docker run -d --name myMongoDB mongo
docker run --link myMongoDB:tmongo -p 5000:5000 tsq/tm
 ```
 
 ### TODO
 

### Initial Ubuntu18

```sh
apt-get update -y
apt-get install zsh unzip git -y
# install oh my zsh: https://github.com/robbyrussell/oh-my-zsh
# install docker: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04
# install docker-compose: https://docs.docker.com/compose/install/
# config ssh: https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
# install nvm: https://github.com/creationix/nvm/blob/master/README.md
nvm install v10.15.3
g clone https://github.com/tsq-cli/translate-server
cd translate-server
touch .env google-auth.json
# edit .env and google-auth.json
# install node_modules
./init-letsencrypt.sh
docker-compose up -d
```
