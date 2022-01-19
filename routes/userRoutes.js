const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

router.post("/adduser", addUser);
router.get("/allusers", getAllUsers);
router.get("/oneuser/:id", getOneUser);
router.put("/edituser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
