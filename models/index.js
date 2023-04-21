const dbConfig = require("../configs/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected...");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todosModel.js")(sequelize, DataTypes);
db.categories = require("./categoriesModel.js")(sequelize, DataTypes);
db.users = require("./usersModel.js")(sequelize, DataTypes);
db.priorities = require("./prioritiesModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done");
});

db.users.hasMany(db.todos, {
  foreignKey: 'user_id',
  as: 'todo'
})

db.todos.belongsTo(db.users, {
  foreignKey: 'user_id',
  as: "user"
})

module.exports = db;
