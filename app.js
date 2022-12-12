const express = require('express');
const app = express()
const connectToDB = require('./db/connection');
const route = require('./routes/routes');

const port = process.env.PORT || 3000;  // Choose a port
app.use(express.json());  // Express.json middleware to parse incoming data (JSON)
app.use(route);  // Middleware function to handle routes

// Function to connect to the database and start the server
const start = async () => {
    try {
        await connectToDB('mongodb://127.0.0.1:27017/todo-list');
        app.listen(port,() => console.log(`server is running at port ${port}`));
    } catch (err) {
        console.log(err);
    }
}

start();