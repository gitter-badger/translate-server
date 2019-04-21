// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate');

// Instantiates a client
const translate = new Translate({
  projectId: 'tsq-tool',
});

// Translates some text into Russian
// doc: https://cloud.google.com/translate/docs/languages

async function detectLanguage(text) {
  let [detections] = await translate.detect(text);
  detections = Array.isArray(detections) ? detections : [detections];
  return detections;
}

async function listLanguages() {
  const [languages] = await translate.getLanguages();
  return languages;
}

async function listLanguagesWithTarget(params) {
  const [languages] = await translate.getLanguages(target);
  return languages;
}

async function translateText(params) {
  const { to, q } = params;
  let [translations] = await translate.translate(q, to);
  translations = Array.isArray(translations) ? translations : [translations];
  return translations[0];
}

exports.translateText = translateText;
exports.listLanguages = listLanguages;
exports.detectLanguage = detectLanguage;
exports.listLanguagesWithTarget = listLanguagesWithTarget;