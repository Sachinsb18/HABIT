// require .env
require('dotenv').config()

// require mongoose
const mongoose = require('mongoose');
const pwd = encodeURIComponent("sachinsb");

//  connect mongoose
mongoose.connect( `mongodb+srv://sachinsb08:${pwd}@habit-tracker.530wo4g.mongodb.net/?retryWrites=true&w=majority` );
mongoose.set('strictQuery', false);
const db = mongoose.connection;

// mongoose connection | error
db.on('error', console.error.bind(console, 'connection error:'));

// mongoose connection | successfull
db.once('open', function () {
    console.log("Connected to :: Mongo db");
});

// module.exports = db;







