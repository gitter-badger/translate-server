const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecordSchema = new Schema({
    from: String,
    to: String,
    result: String,
    ip: String
}, { timestamps: true });

const RecordSchema = mongoose.model('RecordSchema', UserSchema);

module.exports = RecordSchema;