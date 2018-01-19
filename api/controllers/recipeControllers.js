const mongoose = require('mongoose');

const Recipe = require('../models/RecipeModel');

const createRecipe = (req, res) => {
  const { title, timers, color, text, IBU, OG, ABV } = req.body;
  const newRecipe = new Recipe({ 
    title,
    timers,
    color,
    text,
    IBU,
    OG, 
    ABV
  });
  newRecipe
  .save()
  .then(createdRecipe => res.json(createdRecipe))
  .catch(err => res.status(422).json(err));
};

const getRecipes = (req, res) => {
  Recipe.find({})
  .exec()
  .then((recipes) => {
    res.json(recipes);
  })
  .catch(err => res.status(422).json(`Cannot get recipes ${err}`));
};

module.exports = {
  createRecipe,
  getRecipes
};