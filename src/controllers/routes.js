const express = require('express');
const controller = require('./recursos')
const routes = express.Router();

routes.get('/', controller.raiz1);
routes.get('/raiz2', controller.raiz2);
routes.get('/raiz3', controller.raiz3);
routes.get('/raiz4', controller.raiz4);
routes.get('/raiz5', controller.raiz5);

module.exports = routes