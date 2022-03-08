const express = require("express");
const router = express.Router();

// -- importemos el controlador que nos trae las funciones
const userController = require("../controllers/UserController");

router.get("/get-users", userController.getUsers);
router.post("/create-user", userController.createUsers);
router.put("/update-user/:userId", userController.updateUsers);
router.get("/get-one-user/:userId", userController.getOneUser);
router.delete("/delete-user/:userId", userController.deleteUser);
router.post("/login", userController.login);

module.exports = router;
