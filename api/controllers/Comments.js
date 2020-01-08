const express = require('express');
const router = express.Router();
const cors = require('cors');
const moment = require('moment')

// Post Model
const Post = require('../models/Post.js')

// Create comment route
router.patch('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id,{$push: {comments:req.body}}, {new:true}, (err, foundPost) => {
        res.json(foundPost)
    })
})


// // Edit Route for notes into users saved drinks array
// router.put('/:id', (req, res) => {
//     User.findByIdAndUpdate(req.session.user._id, {$pull: {savedDrinks: {_id: req.params.id}}}, {new:true}, (error, foundUser) => {
//         User.findByIdAndUpdate(req.session.user._id, {$push: {savedDrinks: req.body}}, {new:true}, (error, foundUser) => {
//             res.json(foundUser)
//         })
//     })
// })
//
//
// // Delete Route for users saved drinks
router.delete('/:id', (req,res) => {
    Post.findByIdAndUpdate(req.params.id, {$pull: {comments: {_id: req.params.id}}}, {new:true}, (error, foundUser) => {
        res.json(foundUser)
    });
})


module.exports = router;
