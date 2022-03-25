const mongoose = require('mongoose');

const ClientExperienceSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            default: "avatar.png"
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        experience: {
            type: String,
            required: true
        }
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('Client-Experience', ClientExperienceSchema);