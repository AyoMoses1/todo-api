const userControllers = require("../controllers/usersControllers");
const router = require("express").Router();
const passport = require("passport")

const {
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
  getUserTodos
} = userControllers;

router.get("/", passport.authenticate("jwt", {session: false}), getAllUsers);

router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.get("/:id/todos", getUserTodos);


module.exports = router