const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('categoria', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
});
};