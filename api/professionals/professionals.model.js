const moongose = require('mongoose');

const ProSchema = new mongoose.Schema(
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
        }
        phoneNumber: {
            type: Number,
            trim: true,
        }
        city: {
            type: String,
            trim: true
        }
        myDescription: {
            type: String,
            required: true,
            trim: true
        }
    }
)

const Specialty = new mongoose.Schema(
    certified

)