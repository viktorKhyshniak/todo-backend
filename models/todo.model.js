let mongoose = require('mongoose')


let todoSchema = new mongoose.Schema({
    todo: String,
    status: String,
    userId: String,
});

module.exports = mongoose.model('todo', todoSchema, 'todo');
