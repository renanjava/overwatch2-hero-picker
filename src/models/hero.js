'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hero.belongsToMany(models.Player, {
        through: 'favorites',
        foreignKey: 'player_id',
        otherKey: 'hero_id'
      })
    }
  }
  Hero.init({
    key: DataTypes.STRING,
    name: DataTypes.STRING,
    portrait: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes'
  });
  return Hero;
};