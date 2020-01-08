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
router.delete('/:id', (req,res) => {
    Post.findByIdAndUpdate(req.params.id, {$pull: {comments: {_id: req.params.id}}}, {new:true}, (error, foundUser) => {
        res.json(foundUser)
    });
})


module.exports = router;
