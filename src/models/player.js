'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsToMany(models.Hero, {
        through: 'favorites',
        foreignKey: 'player_id',
        otherKey: 'hero_id',
        as: 'favoriteHeroesByPlayer'
      })
    }
  }
  Player.init({
    playerName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'players'
  });
  return Player;
};