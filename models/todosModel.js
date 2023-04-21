const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("todo", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
    }
  })

  return Todo
}