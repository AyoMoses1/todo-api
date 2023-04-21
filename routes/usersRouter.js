const userControllers = require("../controllers/usersControllers");
const router = require("express").Router();

const {
  addUser,
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
} = userControllers;

router.post("/", addUser);
router.get("/", getAllUsers);

router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);


module.exports = router