'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      routeCreator: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      routeLength: {
        type: Sequelize.FLOAT,
      },
      routeName: {
        type: Sequelize.STRING,
      },
      routeLocation: {
        type: Sequelize.STRING,
      },
      routeStartPoint: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
      },
      routeEndPoint: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Routes');
  },
};
