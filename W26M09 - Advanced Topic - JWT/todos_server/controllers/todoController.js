const express = require('express');
const validateToken = require('./../middlewares/validateToken');
const Todos = require('./../models/todoModel');

const todoController = express.Router();

todoController.get('/todosByUser', validateToken, (req, res) => {
    Todos.getTodosByUser([req.userInfo.id])
        .then((result) => {
            return res.json({todos: result.rows});
        });
});


module.exports = todoController;
