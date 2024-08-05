const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
});

module.exports = mongoose.model('Task', TaskSchema);
