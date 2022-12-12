const mongoose = require('mongoose');
// Connect to the MongoDB database
const connectToDB = (connectionString) => {
    return mongoose.connect(connectionString)
}

module.exports = connectToDB;