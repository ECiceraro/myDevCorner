const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema

const PostSchema = new Schema({
    sessionUser: {
        username: {
            type: String,
            required: true
        }

    },
    date: {
        type: Date,
        default: Date.now
    },
    post: String,
    comments: [String]
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post
