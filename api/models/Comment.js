const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


// Create comment Schema
const CommentSchema = new Schema({
    sessionUser: {
        username: {
            type:String,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    comment: String,
});

const Comment = mongoose.model('comment', CommentSchema);

// export comment
module.exports = Comment
