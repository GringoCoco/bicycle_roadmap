'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Route, { foreignKey: 'routeCreator' });
       // Пользователь может создавать много маршрутов
       this.hasMany(models.Route, {
        foreignKey: 'routeCreator',
        as: 'createdRoutes'
      });

      // Пользователь может оставлять много отзывов
      this.hasMany(models.Review, {
        foreignKey: 'userId',
        as: 'reviews'
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
