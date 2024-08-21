const { Router } = require('express');
const { Route } = require('../../db/models');

const router = Router();

// Получение всех маршрутов
router.get('/', async (req, res) => {
  try {
    const routeAll = await Route.findAll();
    return res.json(routeAll);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});
//получение одного
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

// Обновление существующего маршрута
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { routeCreator, routeLength, routeName, routeLocation, routeMap } = req.body;
    const routeUp = await Route.findByPk(id);
    if (routeUp) {
      await routeUp.update({
        routeCreator,
        routeLength,
        routeName,
        routeLocation,
        routeMap,
      });
      res.json(routeUp);
    } else {
      res.status(404).json({ message: 'Route not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
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
