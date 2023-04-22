const db = require("../models");

const User = db.users;
const Todo = db.todos

const getAllUsers = async (req, res) => {
  let users = await User.findAll({
    attributes: [
      "firstName",
      "lastName",
      "email",
      "mobile",
    ],
  });
  res.status(200).send(users);
};

const getUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

const editUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.update(req.body, { where: { id: id } });
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(201).send(`user with id ${id} has been deleted successfully...`);
};

const getUserTodos = async(req, res) => {
  const data = await User.findAll({
    include: [{
      model: Todo,
      as: 'todo'
    }],
    where: {id: req.params.id},
    attributes: [
      "id",
    ],
  })
  res.status(200).send(data)
}

module.exports = {
  editUser,
  getUser,
  getAllUsers,
  deleteUser,
  getUserTodos
};
