const Sequelize = require("sequelize");
const connection = require("../database");

const User = connection.define("users", {
  id: {
    type: Sequelize.UUID,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  email: {
    type: Sequelize.STRING(55),
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING(55),
    allowNull: false,
  },

  user: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

User.sync({ force: false }).then(() => {
  console.log('Tabela "Usuário" criar');
});

module.exports = User;
