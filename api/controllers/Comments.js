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
router.delete('/:id1/:id2', (req,res) => {
    Post.findByIdAndUpdate(req.params.id1, {$pull: {comments: {_id: req.params.id2}}}, {new:true}, (error, deletedComment) => {
        res.json(deletedComment)
    });
})


module.exports = router;
