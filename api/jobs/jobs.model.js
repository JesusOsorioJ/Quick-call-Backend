const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema(
  {
      client: {
        type: String
      },
      professional: {
        type: String
      },
      startDate: {
        type: Date
      },
      completionDate: {
        type: Date
      },
      expectedCompletionTime: {
        type: Date
      },
      roles: {
        type: String
      },
      objectives: {
        type: String
      },
      conditions: {
        type: [],
        default: null
      },
      status: {
        type: String
      },
      comments: {
        type: String
      },
      clientFeedback: {
        type: String
      },
  },
  { _id: mongoose.Schema.Types.ObjectId}
);

module.exports = new mongoose.model('jobs', JobsSchema);
