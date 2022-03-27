const mongoose = require('mongoose');

const specialty = new mongoose.Schema(
    {
        certified: {
            type: String,
            required: false
        },
        inProgress: {
            type: String,
            required: false
        },
        nonCertified: {
            type: String,
            required: false
        }
    },
    { _id: false }
);

const image = new mongoose.Schema(
    {
        profile: {
            data: Buffer,
            contentType: String
        },
        myJobs: {
            data: Buffer,
            contentType: String
        }
    },
    { _id: false }
);

const socialSecurity = new mongoose.Schema (
    {
        eps: {
            type: String,
            required: false
        },
        arl: {
            type: String,
            required: false
        }
    },
    { _id: false }
);

const availability = new mongoose.Schema(
    {
        schedule: {
            type: String,
            required: false
        },
        fullAvailability: {
            type: Boolean,
            required: false
        }
    },
    { _id: false }
);

const professionalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false,
            trim: true
        },
        password: {
            type: String,
            required: false,
            trim: true
        },
        phoneNumber: {
            type: Number,
            trim: true,
        },
        city: {
            type: String,
            trim: true
        },
        myDescription: {
            type: String,
            required: false,
            trim: true
        },
        specialty: {
            type: [specialty],
            default: null
        },
        image: {
            type: image,
            default: null
        },
        socialSecurity: {
            type: socialSecurity,
            default: null
        },
        availability: {
            type: availability,
            default: null
        }
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = new mongoose.model('professional', professionalSchema);