const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Priority = sequelize.define("priority", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })

  return Priority
}