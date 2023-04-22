const db = require("../models");

const Priority = db.priorities;
const Todo = db.todos

const addPriority = async (req, res) => {
  let data = {
    name: req.body.name,
  };
  const priority = await Priority.create(data);
  res.status(201).send(priority);
};

const getAllPriorities = async (req, res) => {
  let priorities = await Priority.findAll({
    attributes: ["id", "name"],
  });
  res.status(200).send(priorities);
};

const deletePriority = async (req, res) => {
  let id = req.params.id;
  await Priority.destroy({ where: { id: id } });
  res.status(201).send(`Priority with id ${id} deleted successfully...`);
};

const getPriorityTodos = async(req, res) => {
  const data = await Priority.findAll({
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
  addPriority,
  getAllPriorities,
  deletePriority,
  getPriorityTodos
};
