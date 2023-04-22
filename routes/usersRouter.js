const userControllers = require("../controllers/usersControllers");
const router = require("express").Router();
const passport = require("passport")

const {
  addUser,
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
  getUserTodos
} = userControllers;

router.post("/", addUser);
router.get("/", passport.authenticate("jwt", {session: false}), getAllUsers);

router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.get("/:id/todos", getUserTodos);


module.exports = router