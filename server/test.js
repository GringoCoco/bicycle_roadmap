const { Route, Review } = require('./db/models');
const sequelize = require('sequelize');

Route.findAll({
  include: [
    {
      model: Review,
      as: 'reviews',
      attributes: [], // Не включаем атрибуты отзывов, нужны только для агрегации
    },
  ],
  attributes: {
    include: [
      // this adds AVG attribute to others instead of rewriting whole body
      [sequelize.fn('AVG', sequelize.col('reviews.rating')), 'avgRating'],
    ],
},
order: [['avgRating', 'ASC']],
  group: ['Route.id'],
}).then((data) => console.log(JSON.stringify(data, null, 2)));


// await Route.findAll({
//     include: [
//       {
//         model: Review,
//         as: 'reviews',
//         attributes: [], // Не включаем атрибуты отзывов, нужны только для агрегации
//       },
//     ],
//     attributes: {
//       include: [
//         // this adds AVG attribute to others instead of rewriting whole body
//         [sequelize.fn('AVG', sequelize.col('reviews.rating')), 'avgRating'],
//       ],
//   },
//     order: [['avgRating', 'ASC']],
//     group: ['Route.id'],
//   }).then((data) => console.log(JSON.stringify(data, null, 2)));