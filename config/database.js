const Sequelize = require('sequelize')
module.exports = new Sequelize('gaslands_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });