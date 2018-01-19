const mongoose = require('mongoose');

const User = require('../models/UserModel');

const createUser = (req, res) => {
  const password = req.password;
  const { username,  
    firstName, 
    lastName, 
    email, 
    isSubscriber, 
    equipment, 
    recipes } = req.body;
  const newUser = new User({ username, 
    password, 
    firstName, 
    lastName, 
    email, 
    isSubscriber, 
    equipment, 
    recipes });
  newUser
    .save()
    .then(createdUser => res.json(createdUser))
    .catch(err => res.status(422).json(err));
};

const getUser = (req, res) => {
  const { username } = req.params;
  User.findOne({  username })
    .exec()
    .then((user) => {
      if (user === null) {
        res = null;
      }
      else {
        res.json(user);
      }
    })
    .catch(err => res.status(422).json(err));
}

const userLogin = (req, res) => {
  res.json(req.loggedInUser);
}

const updateUser = (req, res) => {
  const { username } = req.params;
  User.findOne({ username })
    .exec()
    .then((user) => {
      user.equipment = req.body.equipment;
      user
        .save()
        .then(savedUser => res.json(savedUser))
        .catch(err => res.status(422).json(err))
    })
    .catch(err => res.status(422).json(err));
}

module.exports = {
  createUser,
  getUser,
  userLogin,
  updateUser
};