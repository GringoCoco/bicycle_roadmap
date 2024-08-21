const { Router } = require('express');
const { Routers } = require('../../db/models');

const router = Router();

// Получение всех маршрутов
router.get('/', async (req, res) => {
  try {
    const routeAll = await Routers.findAll();
    res.json(routeAll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Добавление нового маршрута
router.post('/', async (req, res) => {
  try {
    const { routeCreator, routeLength, routeName, routeLocation, routeMap } = req.body;
    if (!routeCreator || !routeLength || !routeName || !routeLocation || !routeMap) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newRoute = await Routers.create({
      routeCreator,
      routeLength,
      routeName,
      routeLocation,
      routeMap,
    });
    res.status(201).json(newRoute);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Обновление существующего маршрута
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { routeCreator, routeLength, routeName, routeLocation, routeMap } = req.body;
    const routeUp = await Routers.findByPk(id);
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
    const routeDestroy = await Routers.findByPk(id);
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
