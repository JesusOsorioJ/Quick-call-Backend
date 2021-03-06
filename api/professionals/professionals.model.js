const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const location = new mongoose.Schema(
    {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    },
    { _id: false }
);

const specialty = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        certificate: {
            type: String,
            default: ''
        },
        isCertified: {
            type: Boolean,
            default: false
        }
    },
    { _id: false }
);

const image = new mongoose.Schema(
    {
        profile: {
            type: String,
            default: "https://res.cloudinary.com/dt7ptke8d/image/upload/v1651275873/user-icon.svg"
        },
        myJobs: {
            type: Array,
            default: null
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
        startTime: {
            type: String,
            default: "00:00",
        },
        endTime: {
            type: String,
            default: "00:00",
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
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: false,
            trim: true
        },
        phoneNumber: {
            type: Number,
            default: null,
            trim: true,
        },
        city: {
            type: String,
            default: null,
            trim: true
        },
        myDescription: {
            type: String,
            default: null,
            trim: true
        },
        specialties: {
            type: [specialty]
        },
        image: {
            type: image,
        },
        socialSecurity: {
            type: socialSecurity,
            default: null
        },
        availability: {
            type: availability,
            default: null
        },
        location: {
            type: location,
        }
    },
    { timestamps: true },
    { versionKey: false }
);

professionalSchema.pre('save', async function (next) {
    const user = this;

    try {
        if(!user.isModified('password')) {
            return next();
        }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;
      next();

    } catch (error) {
        return next(error);
    }
});

professionalSchema.pre('findOneAndUpdate', async function (next) {
    const query = this;

    try {
        if (query._update.password) {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(query._update.password, salt)
            query._update.password = hashed;
        }
        next();
    } catch (error) {
        return next(error);
    }
});

professionalSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return bcrypt.compare(candidatePassword, user.password);
};

professionalSchema.virtual('profile').get(function () {
    const {
        name,
        email
    } = this;

    return {
        name,
        email
    };
});

professionalSchema.virtual('dashboardProfile').get(function () {
    const {
        _id,
        name,
        email,
        phoneNumber,
        city,
        myDescription,
        specialties,
        image,
        socialSecurity,
        availability,
    } = this;
    return {
        _id,
        name,
        email,
        phoneNumber,
        city,
        myDescription,
        specialties,
        image,
        socialSecurity,
        availability,
    };
})

module.exports = mongoose.model('professional', professionalSchema);
