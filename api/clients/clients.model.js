const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        cardNumber: {
            type: Number,
            required: true
        },
        expDate: {
            type: String,
            required: true
        },
        cvv: {
            type: Number,
            required: true
        }
    },
    { _id: false }
);

const ClientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        phoneNumber: {
            type: Number,
            trim: true,
            default: null
        },
        city: {
            type: String,
            trim: true,
            default: null
        },
        profile: {
            type: String,
            default: "avatar.png"
        },
        payment: {
            type: [paymentSchema],
            default: null
        }
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('Client', ClientSchema);