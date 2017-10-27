const express = require('express');
const todoRoutes = express.Router();
//const todoHelpers = require('../services/gps-helper.js');
const todoController = require('../controllers/todo-controller');
const authHelpers = require('../services/auth/auth-helpers.js')

todoRoutes.get('/', authHelpers.loginRequired, todoController.index);//pizzaHelpers.getLatLong, pizzaHelpers.getRestaurantsList,
todoRoutes.get('/new', authHelpers.loginRequired,(req,res) => {
  console.log(req.user);
  res.render('new',{user:req.user.id});
})
todoRoutes.post('/', authHelpers.loginRequired, todoController.create);

todoRoutes.get('/:id', todoController.show);
todoRoutes.put('/:id', authHelpers.loginRequired, todoController.update);
todoRoutes.put('/status/:id',authHelpers.loginRequired, todoController.updateStatus);
todoRoutes.delete('/:id', authHelpers.loginRequired, todoController.delete);

module.exports = todoRoutes;
