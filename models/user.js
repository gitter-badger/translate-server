const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    avatar: String,
    email: String,
    oid: String,
    comment: { type: String, default: '' },
    status: { type: Boolean, default: true },
    profile: Schema.Types.Mixed
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;