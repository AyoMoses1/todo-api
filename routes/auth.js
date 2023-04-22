const router = require("express").Router();
const authControllers = require("../controllers/authControllers")

const {
  registerUser,
  loginUser
} = authControllers;

router.post("/register", registerUser)
router.post("/login", loginUser)


module.exports = router