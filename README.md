# TRANSLATE-SERVER

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

 ### Note

docker link:

 ```sh
docker run -d --name myMongoDB mongo
docker run --link myMongoDB:tmongo -p 5000:5000 tsq/tm
 ```
 
 ### TODO
 
 ```js
 const vision = require('@google-cloud/vision');

// https://github.com/googleapis/nodejs-vision#readme
// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs text detection on the local file
async function run() {
    const [result] = await client.textDetection('https://s3.amazonaws.com/tsq-translate/demo.png');
    const detections = result.textAnnotations;
    console.log(detections[0]['description']);
}

run();
 ```
