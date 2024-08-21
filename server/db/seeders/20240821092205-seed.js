'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван Иванов',
          email: 'ivan@example.com',
          password: await bcrypt.hash('password123', salt),
        },
        {
          name: 'Мария Смирнова',
          email: 'maria@example.com',
          password: await bcrypt.hash('password123', salt),
        },
        {
          name: 'Алексей Кузнецов',
          email: 'alexey@example.com',
          password: await bcrypt.hash('password123', salt),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Routes',
      [
        {
          routeCreator: 1,
          routeLength: 12.5,
          routeName: 'Scenic Route',
          routeLocation: 'Mountain View',
          routeMap:
            '{"coordinates":[{"lat":37.7749,"lng":-122.4194},{"lat":37.8715,"lng":-122.2730}]}',
        },
        {
          routeCreator: 2,
          routeLength: 5.2,
          routeName: 'City Walk',
          routeLocation: 'Downtown',
          routeMap:
            '{"coordinates":[{"lat":37.7749,"lng":-122.4194},{"lat":37.8044,"lng":-122.2711}]}',
        },
        {
          routeCreator: 3,
          routeLength: 20.0,
          routeName: 'Countryside Loop',
          routeLocation: 'Rural Area',
          routeMap:
            '{"coordinates":[{"lat":37.7749,"lng":-122.4194},{"lat":37.6879,"lng":-122.4702}]}',
        },
      ],
      {},
    );
    return queryInterface.bulkInsert(
      'Reviews',
      [
        {
          comment: 'Amazing route with breathtaking views!',
          rating: 5,
          user_id: 1,
          route_id: 1,
        },
        {
          comment: 'Nice and easy route, great for a family ride.',
          rating: 4,
          user_id: 2,
          route_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
