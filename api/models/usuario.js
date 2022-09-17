const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('usuario', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
});
};