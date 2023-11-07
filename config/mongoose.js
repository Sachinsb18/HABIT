// require .env
require('dotenv').config()

// require mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//  connect mongoose
mongoose.connect(`mongodb://127.0.0.1:27017/Habit_Tracker`);
const db = mongoose.connection;

// mongoose connection | error
db.on('error', console.error.bind(console, 'connection error:'));

// mongoose connection | successfull
db.once('open', function () {
    console.log("Connected to :: Mongo db");
});

// module.exports = db;







// // require .env
// require('dotenv').config()

// // require mongoose
// const mongoose = require('mongoose');

// //  connect mongoose
// const connectToMongoose = async () => {
//     try { 
//             await mongoose.connect('mongodb://127.0.0.1:27017/Habit_Tracker',{
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('connected to MongoDB');
//     }catch(err){
//         console.log(err);
//     }
// };


// module.exports = connectToMongoose;