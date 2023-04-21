const priorityControllers = require("../controllers/priorityControllers");
const router = require("express").Router();

const {
  addPriority,
  deletePriority,
  getAllPriorities,
} = priorityControllers

router.post("/", addPriority);
router.get("/", getAllPriorities);

router.delete("/:id", deletePriority);


module.exports = router