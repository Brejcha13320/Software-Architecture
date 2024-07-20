let tasks = [];

const getAllTasks = () => tasks;

const addTask = (task) => {
  tasks.push(task);
  return task;
};

const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  return tasks;
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};
