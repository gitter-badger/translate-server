const express = require('express');
const multer = require('multer')
const path = require('path');

const friendTime = require('../../utils/date').friendTime;
const auth = require('../../middlewares/auth');
const apiControllerAuthWithToken = require('../../controllers/api/authWithTokenController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(process.cwd(), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, req.user.oid + '_' + friendTime() + '_' + file.originalname);
    }
})

var upload = multer({ storage: storage });
const app = express.Router();

app.use(auth.token);
app.get('/validToken', apiControllerAuthWithToken.validToken);
app.post('/translate', apiControllerAuthWithToken.translate);
app.post('/ocr', upload.single('file'), apiControllerAuthWithToken.ocr);

module.exports = app;