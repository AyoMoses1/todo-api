const db = require("../models");

const Todo = db.todos;

// create Todo

const addTodo = async (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    category_id: req.body.category_id,
    due_date: req.body.due_date,
    priority_id: req.body.priority_id,
    completed: req.body.completed ? req.body.completed : false,
    user_id: req.body.user_id
  };
  const todo = await Todo.create(data);
  res.status(201).send(todo);
};

const getAllTodos = async (req, res) => {
  let todos = await Todo.findAll({
    attributes: [
      "title",
      "description",
      "category_id",
      "due_date",
      "priority_id",
      "completed",
      "user_id"
    ],
  });
  res.status(200).send(todos);
};

const getTodo = async (req, res) => {
  let id = req.params.id;
  let todo = await Todo.findOne({ where: { id: id } });
  res.status(200).send(todo);
};

const editTodo = async (req, res) => {
  let id = req.params.id;
  let todo = await Todo.update(req.body, { where: { id: id } });
  res.status(200).send(todo);
};

const deleteTodo = async (req, res) => {
  let id = req.params.id;
  await Todo.destroy({ where: { id: id } });
  res.status(201).send(`todo with ${id} deleted successfully...`);
};

const getCompletedTodos = async (req, res) => {
  let todos = await Todo.findAll({
    attributes: [
      "title",
      "description",
      "category_id",
      "due_date",
      "priority_id",
      "completed",
    ],
    where: { completed: true },
  });
  res.status(200).send(todos);
};

module.exports = {
  addTodo,
  editTodo,
  getTodo,
  getAllTodos,
  deleteTodo,
  getCompletedTodos,
};
