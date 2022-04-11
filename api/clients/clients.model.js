const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

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
        profilePicture: {
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

ClientSchema.pre('save', async function (next) {
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

ClientSchema.pre('findOneAndUpdate', async function (next) {
    const query = this;

    try {
        if (query._update.password) {
            console.log('password changed');
            const salt = await bcrypt.genSalt(10);
            console.log(salt);
            const hashed = await bcrypt.hash(query._update.password, salt)
            console.log(hashed);
            query._update.password = hashed;
        }
        next();
    } catch (error) {
        return next(error);
    }
});

ClientSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return bcrypt.compare(candidatePassword, user.password);
};

ClientSchema.virtual('profile').get(function () {
const {
      name, email,
    } = this;

    return {
      name,
      email,
    };
  });

module.exports = mongoose.model('Client', ClientSchema);
