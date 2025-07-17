const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8001;
const mongoose = require('mongoose');
const TodoRoutes = require('./ROUTES/TodoRoutes');
require('dotenv').config();
require('./db');
app.use(cors());

app.use(bodyParser.json());


app.use('/todosroutes', TodoRoutes);


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Todo API' });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});