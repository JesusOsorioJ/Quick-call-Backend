const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
},
{ timestamps: true },
{ versionKey: false });

AdminSchema.pre('save', async function (next) {
    const user = this;
    try {
        if(!user.isModified('password')) {
            next();
        }
        const salt = bcrypt.genSalt(10);
        const hash = bcrypt.hash(user.password, salt);

        user.password = hash;

        next();
    } catch (e) {
        return next(e);
    }
})

AdminSchema.pre('findOneAndUpdate', async function (next) {
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
})

AdminSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return await bcrypt.compare(candidatePassword, user.password);
}

module.exports = mongoose.model('Admin', AdminSchema);
