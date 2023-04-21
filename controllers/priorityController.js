const db = require("../models");

const Category = db.categories;

const addCategory = async (req, res) => {
  let data = {
    name: req.body.name,
    description: req.body.description,
  };
  const category = await Category.create(data);
  res.status(201).send(category);
};

const getAllCategories = async (req, res) => {
  let categories = await Category.findAll({
    attributes: ["id", "name", "description"],
  });
  res.status(200).send(categories);
};

const getCategory = async (req, res) => {
  let id = req.params.id;
  let category = await Category.findOne({ where: { id: id } });
  res.status(200).send(category);
};

const editCategory = async (req, res) => {
  let id = req.params.id;
  let category = await Category.update(req.body, { where: { id: id } });
  res.status(200).send(category);
};

const deleteCategory = async (req, res) => {
  let id = req.params.id;
  await Category.destroy({ where: { id: id } });
  res.status(201).send(`Category with ${id} deleted successfully...`);
};

module.exports = {
  addCategory,
  editCategory,
  getCategory,
  getAllCategories,
  deleteCategory,
};