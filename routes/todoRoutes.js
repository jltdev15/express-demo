const express = require("express");

// ES 5 Require

const todoController = require("../controller/TodoController");
const checkUser = require("../middleware/checkUser");

const router = express.Router();

// Protected Routes
router.post("/tasks", checkUser.verifyToken, todoController.createTask);
router.get("/all/tasks", checkUser.verifyToken, todoController.getTask);

module.exports = router;
