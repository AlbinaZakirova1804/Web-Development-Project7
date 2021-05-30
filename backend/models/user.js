const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('user', {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,

      allowNull: false
    }
  });

 User.associate = models => {
    User.hasMany(models.Message, {
      foreignKey: 'messageId'
    });
  
  
};
 
return User;

};