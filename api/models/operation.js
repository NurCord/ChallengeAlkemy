const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('operation', {
    type: {
      type: DataTypes.ENUM('EGRESO', 'INGRESO'),
      allowNull: false,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    concept:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false
});
};