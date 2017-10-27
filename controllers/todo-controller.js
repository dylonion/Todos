const Todo = require('../models/todo');

const TodoController = {};

TodoController.index = (req, res) => {
  Todo.findAll(req.user.id)
    .then(todo => {
      res.render('view',{
          todo:todo
      }).catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
  })
};

TodoController.show = (req, res) => {
  if(req.params.id==='new'){
    res.render('add');
  }else{
    Todo.findById(req.params.id)
    .then(todo => {
      if(req.query.edit === "y"){
        console.log('req query edit',req.query.edit);
        todo.showedit = '';
      }
      res.render('show', {todo});
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
};

TodoController.create = (req, res) => {
  console.log(req.body);
  Todo.create({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      user_id:parseInt(req.user.id)
    }).then(todo => {
      res.redirect(`/todo/${todo.id}`);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

TodoController.update = (req, res) => {
  Todo.update({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    user_id:req.user.id,
    status: req.body.status,
    }, req.params.id).then(todo => {
      res.redirect(`/todo/${todo.id}`);
    }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Update failed',
      error: err,
    });
  });
};
TodoController.updateStatus = (req, res) => {
  Todo.updateStatus({
    status: req.body.status
  }, req.params.id).then(todo => {
      res.redirect(`/todo/${todo.id}`);
    }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Update failed',
      error: err,
    });
  });
}
TodoController.delete = (req, res) => {
  Todo.destroy(req.params.id)
    .then(() => {
      res.redirect('/todo');
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Delete failed',
        error: err,
      });
    });
};

module.exports = TodoController;
