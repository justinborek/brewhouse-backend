const mongoose = require('mongoose');

const Recipe = require('../models/RecipeModel');

const createRecipe = (req, res) => {
  const { title, timers, color } = req.body;
  const newRecipe = new Recipe({ 
    title,
    timers,
    color
  });
  newRecipe
  .save()
  .then(createdRecipe => res.json(createdRecipe))
  .catch(err => res.status(422).json(err));
};

const getRecipes = (req, res) => {

};

module.exports = {
  createRecipe,
  getRecipes
};