'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       // Маршрут принадлежит одному пользователю
       this.belongsTo(models.User, {
        foreignKey: 'routeCreator',
        as: 'creator'
      });

      // Маршрут может иметь много отзывов
      this.hasMany(models.Review, {
        foreignKey: 'route_id',
        as: 'reviews'
      });
    }
  }
  Route.init(
    {
      routeCreator: DataTypes.INTEGER,
      routeLength: DataTypes.FLOAT,
      routeName: DataTypes.STRING,
      routeLocation: DataTypes.STRING,
      routeMap: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Route',
    },
  );
  return Route;
};
