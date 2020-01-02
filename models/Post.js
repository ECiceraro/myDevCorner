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

module.exports = Post = mongoose.model('post', PostSchema);
