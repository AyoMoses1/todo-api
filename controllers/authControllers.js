const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;

const registerUser = async (req, res) => {
  const { firstName, lastName, email, mobile, password } = req.body;
  let data = {
    firstName,
    lastName,
    email,
    mobile,
    password,
  };
  // do some check to see if the data coming is accurate

  const alreadyExistingUser = await User.findOne({ where: { email } });
  if (alreadyExistingUser) {
    return res.status(400).send({ message: "User with email already exists" });
  } else {
    const user = await User.create(data).catch((err) => {
      res.json({ error: "Cannot register user at the moment!!! " });
    });
    if (user) {
      res.status(201).send(user);
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userWithEmail = await User.findOne({ where: { email } });
  if (!userWithEmail) {
    return res.status(403).json({ message: "Email or Password doesn't exist" });
  }
  if (userWithEmail.password !== password) {
    return res.status(403).json({ message: "Email or Password doesn't exist" });
  }
  const jwtToken = jwt.sign(
    {
      id: userWithEmail.id,
      email: userWithEmail.email,
    },
    process.env.JWT_SECRET
  );
  res.status(200).json({
    message: "Welcome Back",
    token: jwtToken,
    name: userWithEmail.firstName,
  });
};

module.exports = {
  registerUser,
  loginUser,
};
