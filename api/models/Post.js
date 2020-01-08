const mongoose = require('mongoose');
const Comment  = require('../models/Comment.js')
const Schema   = mongoose.Schema;


// Create post Schema
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
    comments: [Comment.schema]
});

const Post = mongoose.model('post', PostSchema);

// exports Post class/schema
module.exports = Post
