const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL, {
    dbName: 'todoApp',

})

.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
}); 
