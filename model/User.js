const Sequelize = require("sequelize");
const connection = require("../database");

const User = connection.define("users", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    // autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  email: {
    type: Sequelize.STRING(55),
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },

  username: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

User.sync({ force: false }).then(() => {
  console.log('Tabela "Usuário" criada');
});

module.exports = User;
