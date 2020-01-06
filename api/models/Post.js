const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema

const PostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    post: {
        type: String
    }
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post 
