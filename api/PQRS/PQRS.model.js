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
  }
);

module.exports = new mongoose.model('PQRS', PQRSSchema);
