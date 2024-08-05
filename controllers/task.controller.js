const Task = require('../models/task.model');

exports.createTask = async (req, res) => {
  const { taskName, description, status } = req.body;

  try {
    const task = new Task({ taskName, description, status });
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
