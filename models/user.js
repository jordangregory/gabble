"use strict";
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        tpye: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  return user;
};
