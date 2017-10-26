const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
  return db.query('SELECT * FROM todo');
};

Todo.findById = (id) => {
  return db.oneOrNone(`
    SELECT *
    FROM todo
    WHERE id = $1
  `, [id]);
};

Todo.create = (Todo) => {
  return db.one(`
    INSERT INTO todo
    (title, category, description, user, status, origintime)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `, [Todo.title, Todo.category, Todo.description, Todo.user, Todo.status, Todo.origintime]);
};

Todo.update = (Todo, id) => {
  return db.one(`
    UPDATE todo SET
    title = $1,
    category = $2
    description = $3,
    user = $4,
    status = $5,
    origintime = $6
    WHERE id = $7
    RETURNING *
  `, [Todo.title, Todo.category, Todo.description, Todo.user, Todo.status, Todo.origintime, id]);
};

Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todo
    WHERE id = $1
  `, [id]);
};

module.exports = Todo;
