const routRouter = require('express').Router();
const sharp = require('sharp');
const fs = require('fs/promises');

const { Route, User } = require('../../db/models');
const upload = require('../middlewares/multer.middleware');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const route = require('../../db/models/route');

routRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const routes = await Route.findAll({
        include: {
          model: User,
          attributes: ['id', 'email', 'name'],
        },
      });
      res.json(routes);
    } catch (err) {
      res.status(500).send('Internal server error');
    }
  })
  .post(verifyAccessToken, upload.single('file'), async (req, res) => {
    // проверяем наличие файла
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'File not found' });
      }
      // создаем имя файла с расширением webp и привязкой к дате
      const name = `${Date.now()}.webp`;
      // создаем буфер с помощью sharp
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      // создаем файл с помощью fs
      await fs.writeFile(`./public/img/${name}`, outputBuffer);
      // создаем пост в бд
      const routes = await Route.create({
        routeName: req.body.routeName,
        routeLocation: req.body.routeLocation,
        routeCreator: req.body.routeCreator,
        routeLength: req.body.routeLength,
        routeMap: req.body.routeMap,
        img: name,
        route_id: res.locals.route.id,
      });
      // отправляем пост
      const currentRoute = route.get();
      currentRoute.User = res.locals.user;

      res.json(currentRoute);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal server error');
    }
  });

routRouter.route('/:id').delete(verifyAccessToken, async (req, res) => {
  try {
    const route = await Route.destroy({
      where: { id: req.params.id, route_id: res.locals.id },
    });
    if (!route) {
      return res.sendStatus(401);
    }
    fs.unlink(`./public/img/${route.img}`).catch((e) => console.log(e));
    if (!route) {
      res.status(404).json({ message: 'Post not found' });
    }
    await route.destroy();
    res.json({ message: 'Post deleted' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = routeRouter;
