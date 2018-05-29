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
  // type: { type: Schema.Types.ObjectId, ref: 'LiquorTypes' }
  liquorType: String,
});

var LiquorRecipe = mongoose.model('LiquorRecipe', LiquorRecipeSchema);


module.exports = LiquorRecipe;
