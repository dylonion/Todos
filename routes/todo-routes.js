const express = require('express');
const todoRoutes = express.Router();
//const todoHelpers = require('../services/gps-helper.js');
const todoController = require('../controllers/todo-controller');

todoRoutes.get('/', todoController.index);//pizzaHelpers.getLatLong, pizzaHelpers.getRestaurantsList,
todoRoutes.get('/new',(req,res) => {
  res.render('new');
})
todoRoutes.post('/', todoController.create);

todoRoutes.get('/:id', todoController.show);
todoRoutes.put('/:id', todoController.update);
todoRoutes.delete('/:id', todoController.delete);

module.exports = todoRoutes;
