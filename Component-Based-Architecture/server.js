const express = require("express");
const app = express();
const taskRoutes = require("./components/tasks/taskRoutes");

app.use(express.json());

// Usar las rutas de tareas
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
