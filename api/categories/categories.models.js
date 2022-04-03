const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema(
    {
        filter: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        value: {
            type: String,
            required: false
        }
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = new mongoose.model('categorie', categorieSchema);
