const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

// Route for getting all tasks (protected route)
router.get("/", protect, getTasks);

// Route for creating a new task (protected route)
router.post("/", protect, createTask);

// Route for updating a task (protected route)
router.put("/:id", protect, updateTask);

// Route for deleting a task (protected route)
router.delete("/:id", protect, deleteTask);

module.exports = router;
