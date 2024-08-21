'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Отзыв принадлежит одному пользователю
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'author',
      });

      // Отзыв принадлежит одному маршруту
      this.belongsTo(models.Route, {
        foreignKey: 'route_id',
        as: 'route',
      });
    }
  }
  Review.init(
    {
      comment: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      route_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    },
  );
  return Review;
};
