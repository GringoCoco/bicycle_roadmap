const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('../src/route/auth.router');
const routRouter = require('../src/route/route.router');
const tokenRouter = require('../src/route/token.router');
const routersRouter = require('../src/route/routers');

const app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/route', routRouter);
app.use('/api/auth', authRouter);
app.use('/api/token', tokenRouter);
app.use('/api/routers', routersRouter);

module.exports = app;
