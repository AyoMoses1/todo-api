const categoryControllers = require("../controllers/categoriesControllers");
const router = require("express").Router();

const {
  addCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
  getCategory,
  getCategoryTodos
} = categoryControllers

router.post("/", addCategory);
router.get("/", getAllCategories);

router.get("/:id", getCategory);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);
router.get("/:id/todos", getCategoryTodos);


module.exports = router