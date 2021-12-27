'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hewans extends Model {
    static associate(models) {
    }
  };
  hewans.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama: DataTypes.STRING,
    namaSpesies: DataTypes.TEXT,
    umur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hewans',
  });
  return hewans;
};