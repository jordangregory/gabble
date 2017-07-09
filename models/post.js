"use strict";
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define(
    "post",
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {}
  );
  return post;
};
