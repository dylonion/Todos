const db = require('../db/config');

const Todo = {};

Todo.findAll = (id) => {
  return db.query(`
    SELECT *
    FROM todo
    WHERE user_id = $1
  `, [id]);
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
    (title, category, description, user_id, status)
    VALUES ($1, $2, $3, $4, 'incomplete')
    RETURNING *
  `, [Todo.title, Todo.category, Todo.description, Todo.user_id]);
};

Todo.update = (Todo, id) => {
  return db.one(`
    UPDATE todo SET
    title = $1,
    category = $2,
    description = $3,
    user_id = $4,
    status = $5
    WHERE id = $6
    RETURNING *
  `, [Todo.title, Todo.category, Todo.description, Todo.user_id, Todo.status, id]);
};

Todo.updateStatus = (Todo, id) => {
  return db.one(`
    UPDATE todo SET
    status = $1
    WHERE id = $2
    RETURNING *
  `,[Todo.status, id]);
}
Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todo
    WHERE id = $1
  `, [id]);
};

module.exports = Todo;
