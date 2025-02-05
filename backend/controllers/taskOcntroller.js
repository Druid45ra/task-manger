const Task = require("../models/Task");

// Get all tasks for user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Add new task
exports.addTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      user: req.user.userId,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
