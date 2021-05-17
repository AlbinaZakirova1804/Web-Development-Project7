

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 /* User.associate = models => {
    User.hasMany(models.Message);
  };*/
  return User;
};
 
module.exports = user;
//export default user;