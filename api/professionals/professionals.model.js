const moongose = require('mongoose');

const specialty = new mongoose.Schema(
    {
        certified: {
            type: String,
            required: true
        },
        inProgress: {
            type: String,
            required: true
        },
        nonCertified: {
            type: String,
            required: true
        }
    }
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
    }
);

const socialSecurity = new mongoose.Schema (
    {
        eps: {
            type: String,
            required: true
        },
        arl: {
            type: String,
            required: true
        }
    }
);

const availability = new mongoose.Schema(
    {
        schedule: {
            type: String,
            required: true
        },
        fullAvailability: {
            type: Boolean,
            required: true
        }
    }
);

const professionalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
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
            required: true,
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

module.exports = new mongoose.model('Professional', professionalSchema);