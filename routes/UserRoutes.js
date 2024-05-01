const express = require("express");

// ES 5 Require

const userController = require("../controller/UserController");
const authController = require("../controller/AuthController");
const checkUser = require("../middleware/checkUser");

const router = express.Router();

// Protected Routes
router.get("/users", checkUser.verifyToken, userController.getUsers);

router.post("/create", authController.registerUser);
router.post("/login", authController.login);

module.exports = router;
