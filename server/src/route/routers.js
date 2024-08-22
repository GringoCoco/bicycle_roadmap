const { Router } = require('express');
const { Route, Review } = require('../../db/models');
const sequelize = require('sequelize');

const router = Router();

// Получение всех маршрутов
router.get('/', async (req, res) => {
  try {
    const routeAll = await Route.findAll({
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
    });
    // console.log(routeAll.json());
    // console.log(routeAll);
    

    return res.json(routeAll);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});
// получение одного
router.get('/:id', async (req, res) => {
  try {
    const routeOne = await Route.findOne();
    return res.json(routeOne);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Bad Connect' });
  }
});
// //добавление карточки по запросу
// router.post('/createroute', async (req, res) => {
//   try {

//   } catch (error) {}
// });

// Добавление нового маршрута
router.post('/createroute', async (req, res) => {
  try {
    console.log(req.body);

    const { routeCreator, routeLength, routeName, routeLocation } = req.body;
    if (!routeCreator || !routeLength || !routeName || !routeLocation) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newRoute = await Route.create({
      routeCreator,
      routeLength,
      routeName,
      routeLocation,
    });

    return res.status(201).json(newRoute);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  await Route.update(req.body, {
    where: { id: req.params.id },
  });
  res.sendStatus(200);
});

// Удаление маршрута
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const routeDestroy = await Route.findByPk(id);
    if (routeDestroy) {
      await routeDestroy.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Route not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
