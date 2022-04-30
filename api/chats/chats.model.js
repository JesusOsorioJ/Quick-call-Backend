const mongoose = require('mongoose');

const message = new mongoose.Schema({
    text: String,
    user: String,
}, { timestamps: true, _id: false, versionKey: false });

const ChatSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    messages: [message],
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Chat', ChatSchema);
