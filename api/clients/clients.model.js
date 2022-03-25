const mongoose = require('mongoose');

const paymentInfo = new mongoose.Schema({
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
});

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
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        profile: {
            type: String,
            default: "avatar.png"
        },
        payment: {
            type: [paymentInfo],
            default: null
        }
    },
    { timestamps: true },
    { versionKey: false }
)