# TRANSLATE-SERVER

Building a custom translator.

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

### Site point

- doc: http://translate.i-aws.com/apidoc
- management: http://translate.i-aws.com
- about: http://translate.i-aws.com/about

### Thank you

 - https://www.sohamkamani.com/blog/javascript/2018-06-24-oauth-with-node-js/
 - https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04
 - https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

 ### Note

docker link:

 ```sh
docker run -d --name myMongoDB mongo
docker run --link myMongoDB:tmongo -p 5000:5000 tsq/tm
 ```