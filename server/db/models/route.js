'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Route.init({
    routeCreator: DataTypes.INTEGER,
    routeLength: DataTypes.FLOAT,
    routeName: DataTypes.STRING,
    routeLocation: DataTypes.STRING,
    routeLike: DataTypes.INTEGER,
    routeComment: DataTypes.STRING,
    routeMap: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};