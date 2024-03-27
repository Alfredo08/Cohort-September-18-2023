const pool = require('./../database/config');

const getTodosByUser = (data) => {
    const nativeQuery = `
        SELECT description, status
        FROM todos
        WHERE todos.user_id = $1;
    `;

    return pool.query(nativeQuery, data);
}; 

const Todos = {
    getTodosByUser
};

module.exports = Todos;