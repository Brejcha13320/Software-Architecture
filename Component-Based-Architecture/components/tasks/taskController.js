const taskModel = require("./taskModel");

const getAllTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.status(200).json(tasks);
};

const addTask = (req, res) => {
  const task = req.body;
  const newTask = taskModel.addTask(task);
  res.status(201).json(newTask);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const tasks = taskModel.deleteTask(id);
  res.status(200).json(tasks);
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};
