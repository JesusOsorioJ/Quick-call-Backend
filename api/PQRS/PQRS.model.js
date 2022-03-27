const mongoose = require('mongoose');

const evidence = new mongoose.Schema(
  {
      videos: {
          data: Buffer,
          contentType: String
      },
      photos: {
          data: Buffer,
          contentType: String
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
  { _id: false }
);

module.exports = new mongoose.model('PQRS', PQRSSchema);
