const todoControllers = require("../controllers/todosControllers");
const router = require("express").Router();
const passport = require("passport");

const {
  addTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getCompletedTodos,
  getTodo,
} = todoControllers;

router.post("/", addTodo);
router.get("/", passport.authenticate("jwt", { session: false }), getAllTodos);
router.get("/completed", passport.authenticate("jwt", {session: false}), getCompletedTodos);

router.get("/:id", getTodo);
router.put("/:id", passport.authenticate("jwt", { session: false }), editTodo);
router.delete("/:id", passport.authenticate("jwt", {session: false}), deleteTodo);

module.exports = router;
