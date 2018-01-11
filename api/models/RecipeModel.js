const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  timers: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);