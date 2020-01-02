const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsController = require('./controllers/Posts.js');
const cors = require('cors');

const app = express();

// Allows us to use the env file to keep sensitive information secure
require('dotenv').config();

// Allows us to have our servers receive and send data from differents origins than the original server.
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = process.env.MONGODB_URI;

// Port config
const port = process.env.PORT;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

// Controllers
app.use('/posts', postsController)

// // Serve static assets if in production
// if(process.env.NODE_ENV === 'production') {
//     // set static folder
//     app.use(express.static('my-dev-corner/build'));
//
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'my-dev-corner', 'build', 'index.html'));
//     })
// }

    app.listen(port, () => console.log(`Server started on port ${port}`));
