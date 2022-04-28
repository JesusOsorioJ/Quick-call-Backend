const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema(
  {
      client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
        required: true
      },
      professional: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'professionals',
        required: true
      },
      startDate: {
        type: Date,
        default: Date()
      },
      completionDate: {
        type: Date
      },
      objective: {
        type: String,
        required: true,
        trim: true
      },
      conditions: {
        type: [String],
        required: true
      },
      status: {
        type: String,
        default: 'Oferta'
      },
      clientFeedback: {
        type: String
      },
  },
  { versionKey: false }
);

module.exports = new mongoose.model('jobs', JobsSchema);
