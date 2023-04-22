const priorityControllers = require("../controllers/priorityControllers");
const router = require("express").Router();

const {
  addPriority,
  deletePriority,
  getAllPriorities,
  getPriorityTodos
} = priorityControllers

router.post("/", addPriority);
router.get("/", getAllPriorities);

router.delete("/:id", deletePriority);
router.get("/:id/todos", getPriorityTodos);



module.exports = router