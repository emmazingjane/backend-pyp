var mongoose = require('mongoose');
var Schema = mongoose.Schema;
LiquorType = require('./liquor_types')

var LiquorRecipeSchema = new Schema ({
  img_url: String,
  drinkName: String,
  description: String,
  ingredients: String,
  instructions: String,
  votes: Number,
  type: [LiquorType.schema]
});

var LiquorRecipe = mongoose.model('LiquorRecipes', LiquorRecipeSchema);


module.exports = LiquorRecipe;
