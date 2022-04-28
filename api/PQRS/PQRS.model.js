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
  { _id: false, versionKey: false }
);

const PQRSSchema = new mongoose.Schema(
  {
      petitioner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      date: {
        type: Date,
        default: new Date()
      },
      subject: {
        type: String,
        required: true,
        trim: true,
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
      status: {
        type: String,
        default: 'Pendiente'
      },
      actions: {
        type: [String],
        default: []
      }
  },
  { versionKey: false }
);

module.exports = new mongoose.model('PQRS', PQRSSchema);
