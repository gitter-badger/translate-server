const vision = require('@google-cloud/vision');

// https://github.com/googleapis/nodejs-vision#readme
// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
* TODO(developer): Uncomment the following line before running the sample.
*/
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs text detection on the local file
async function textDetection(fileUrl) {
   const [result] = await client.textDetection(fileUrl);
   const detections = result.textAnnotations;
   if (!detections.length) return '';
   const data = detections[0]['description'];
   return data.trim();
}

exports.textDetection = textDetection;