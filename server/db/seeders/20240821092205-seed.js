'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    // const salt = await bcrypt.genSalt(10);

    // await queryInterface.bulkInsert(
    //   'Users',
    //   [
    //     {
    //       name: 'Иван Иванов',
    //       email: 'ivan@example.com',
    //       password: await bcrypt.hash('password123', salt),
    //     },
    //   ],
    //   {},
    // );
    // await queryInterface.bulkInsert(
    //   'Routes',
    //   [
    //     {
    //       routeCreator: 1,
    //       routeLength: 12.5,
    //       routeName: 'Scenic Route',
    //       routeLocation: 'Mountain View',
    //       routeStartPoint: [ 55.776779637013476, 37.60478664936827 ],
    //       routeEndPoint: [ 55.71909417237845, 37.652492418907144 ],
    //     },
    //   ],
    //   {},
    // );
    // return queryInterface.bulkInsert(
    //   'Reviews',
    //   [
    //     {
    //       comment: 'Amazing route with breathtaking views!',
    //       rating: 5,
    //       user_id: 1,
    //       route_id: 1,
    //     },
    //     {
    //       comment: 'Amazing route',
    //       rating: 4,
    //       user_id: 1,
    //       route_id: 1,
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
