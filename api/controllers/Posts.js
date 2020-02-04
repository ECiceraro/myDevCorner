const express = require('express');
const router  = express.Router();
const moment  = require('moment')
const cors    = require('cors');

// Post Model
const Post = require('../models/Post.js')

// Index Route GET Request
// Gets all posts
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1})
        .then(posts => {
            res.json(posts)
        });
});

// Create Route POST Request
// Creates new Post in DB
router.post('/', (req, res) => {
    Post.create(req.body)
    .then(post => {
        res.json(post)
    });
});


// Delete Route DELETE Request
// deletes a post
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id)
    .then(deletedPost => res.json(deletedPost))
    .catch(err => res.status(404).json(err));
})

// Edit Post Route
// allows edits to post
router.patch('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {$set: {post: req.body.post}}, {new: true})
  .then(updatedPost => res.json(updatedPost))
  .catch(err => res.status(404).json(err));
})



module.exports = router;
