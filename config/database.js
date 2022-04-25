const mongoose = require('mongoose');

// const URI = process.env.MONGO_DB_URI;
const URI = "mongodb+srv://quick-call-team:fppxXhKPMcMQUKPu@quick-call.u7ccy.mongodb.net/quick-call?retryWrites=true&w=majority"

async function connectDB() {
    try {
        await mongoose.connect(URI)
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
