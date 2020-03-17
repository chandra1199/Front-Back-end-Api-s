'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    UserName: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Type: DataTypes.STRING
  }, {});
  
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};