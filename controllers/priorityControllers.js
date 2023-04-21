const db = require("../models");

const Priority = db.priorities;

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

module.exports = {
  addPriority,
  getAllPriorities,
  deletePriority,
};
