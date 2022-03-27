const mongoose = require('mongoose');

const evidence = new mongoose.Schema(
  {
      videos: {
        type: []
      },
      photos: {
        type: []
      }
  },
  { _id: false }
);

const PQRSSchema = new mongoose.Schema(
  {
      client: {
        type: String,
        required: true
      },
      date: {
        type: Date
      },
      professional: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      evidence: {
        type: evidence,
        default: null
      },
  },
  { _id: mongoose.Schema.Types.ObjectId }
);

module.exports = new mongoose.model('PQRS', PQRSSchema);
