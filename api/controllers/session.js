const express = require('express')
const bcrypt  = require('bcrypt')
const router  = express.Router()
const session = require('express-session');
const User    = require('../models/User.js')

router.post('/', (req, res) => {
    User.findOne({username: req.body.username},  (error, foundUser) => {
        if(foundUser === null){
            res.json({
                sessionUser: '',
                messageA: 'User not found',
                messageB: null
            })
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password)
            if(doesPasswordMatch){
                req.session.user = foundUser
                res.json({
                    sessionUser: req.session.user,
                    messageA: null,
                    messageB: null
                })
            } else {
                res.json({
                    sessionUser: '',
                    messageB:'Incorrect password',
                    messageA: null
                })
            }
        }
    })
})

router.get('/', (req,res) => {
    res.json(req.session.user)
})

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.json({
            destroyed: true
        })
    })
})
module.exports = router
