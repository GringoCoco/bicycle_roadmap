const { Router } = require('express');
const { Route, Review, User } = require('../../db/models');
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

// Достать все коммы и рейтинг
// Получение отзывов для конкретного маршрута
router.get('/review/route/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const route = await Route.findByPk(id, {
      include: [
        {
          model: Review,
          as: 'reviews',
          include: [
            {
              model: User,
              as: 'author',
              attributes: ['id', 'name'], // Выбираем нужные атрибуты пользователя
            },
          ],
        },
      ],
    });

    if (!route) {
      return res.status(404).json({ error: 'route not found' });
    }

    return res.json(route.reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'route error' });
  }
});

// Добавление нового маршрута
router.post('/createroute', async (req, res) => {
  try {
    console.log(req.body);

    const { routeCreator, routeName, routeLocation, routeStartPoint, routeEndPoint } =
      req.body;
    if (
      !routeCreator ||
      !routeName ||
      !routeLocation ||
      !routeStartPoint ||
      !routeEndPoint
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newRoute = await Route.create({
      routeCreator,
      routeName,
      routeLocation,
      routeStartPoint,
      routeEndPoint,
    });

    return res.status(201).json(newRoute);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Изменить данные
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
