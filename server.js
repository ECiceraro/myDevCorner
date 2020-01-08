const express            = require('express');
const mongoose           = require('mongoose');
const session            = require('express-session');
const bodyParser         = require('body-parser');
const bcrypt             = require('bcrypt');
const cors               = require('cors');
const path               = require('path');
const postsController    = require('./api/controllers/Posts.js');
const usersController    = require('./api/controllers/Users.js');
const sessionController  = require('./api/controllers/session.js');
const commentsController = require('./api/controllers/Comments.js');
const app                = express();

// Allows us to use the env file to keep sensitive information secure
require('dotenv').config();

// Allows us to have our servers receive and send data from differents origins than the original server.
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

// Allows us to use the sessions body
app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized:false
}))

// DB config
const db = process.env.MONGODB_URI;
console.log(db);

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log('connection not established ', err));

// Controllers
app.use('/posts', postsController)

app.use('/users', usersController)

app.use('/session', sessionController)

app.use('/comments', commentsController)

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));
    // allows requests to go through once in production enviroment
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

    app.post('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Port config
const PORT = process.env.PORT;
    // Port Listener
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
