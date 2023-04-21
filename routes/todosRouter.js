const todoControllers = require("../controllers/todosControllers");
const router = require("express").Router();

const {
  addTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getCompletedTodos,
  getTodo,
} = todoControllers;

router.post("/", addTodo);
router.get("/", getAllTodos);
router.get("/completed", getCompletedTodos);

router.get("/:id", getTodo);
router.put("/:id", editTodo);
router.delete("/:id", deleteTodo);


module.exports = router
