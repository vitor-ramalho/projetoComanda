//http server
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());

app.use(bodyParser.json());


//Quando executo um método, o middleware executa.
//app.use('/posts', () =>{
//    console.log('this is a middleware')
//})

//Import Routes
const postsRoute = require('./routes/posts');
const mesasRoute = require('./routes/mesas');

  
app.use('/posts', postsRoute)
app.use('/mesas', mesasRoute);

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    () => console.log('Connected to DB!'))
//how to we start listening to the server
app.listen(3000, () => console.log('Server running on port 3000'))