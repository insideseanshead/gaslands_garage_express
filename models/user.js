const bcrypt = require("bcrypt");

module.exports = function (sequelize, Datatypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  return User
};
