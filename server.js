const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsController = require('./controllers/Posts.js');
const cors = require('cors');

const app = express();

app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

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

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
