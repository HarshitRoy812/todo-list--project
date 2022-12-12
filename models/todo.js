const mongoose = require('mongoose');

// Create a todo schema
const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    isCompleted : {
        type : Boolean,
        default : false
    }
})

// Compile it into a model and export it
module.exports = mongoose.model('todo-list',TodoSchema);