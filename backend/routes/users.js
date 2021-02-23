const express = require('express');
const router = express.Router()

const User = require('../models/user.model')

router.get('/', (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add', (req,res) => {

    const newUser = new User({
        username: req.body.username
    });
  
    newUser.save()
      .then(() => res.json('User added!' + newUser))
      .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router