const express = require('express');
const router  = express.Router();
const cors    = require('cors');
const moment  = require('moment');

// Post Model
const Post = require('../models/Post.js')

// Create comment route
router.patch('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id,{$push: {comments:req.body}}, {new:true}, (err, foundPost) => {
        res.json(foundPost)
    })
})

 // Delete Route for comments
router.delete('/:postId/:commentId', (req,res) => {
    Post.findByIdAndUpdate(req.params.postId, {$pull: {comments: {_id: req.params.commentId}}}, {new:true}, (error, deletedComment) => {
        res.json(deletedComment)
    });
})

// Edit Route for comments
router.patch('/:postId/:commentId', (req,res) => {
  Post.comments.findByIdAndUpdate(req.params.commentId, {$set: {comment: req.body.comment}}, {new: true})
  .then(updatedComment => res.json(updatedComment))
  .catch(err => res.status(404).json(err));
})

module.exports = router;
