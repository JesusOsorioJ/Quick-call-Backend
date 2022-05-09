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
        required: true,
      },
      clientName: {
        type: String,
        required: true
      },
      professionalName: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        default: 0,
      },
      payment :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payments',
      },
      title: {
        type: String,
        required: true,
        trim: true
      },
      objective: {
        type: String,
        required: true,
        trim: true
      },
      conditionsClients: {
        type: [],
      },
      evidenceClients: {
        type: [],
      },
      conditionsProfessionals: {
        type: [],
      },
      evidenceProfessionals: {
        type: [],
      },
      status: {
        type: String,
        default: 'Oferta'
      },
      startDate: {
        type: Date,
        default: Date()
      },
      completionDate: {
        type: Date
      },
      clientFeedback: {
        type: String
      },
  },
  { versionKey: false }
);

module.exports = mongoose.model('jobs', JobsSchema);
