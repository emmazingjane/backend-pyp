var models = require('../models');
var LiquorType = models.LiquorType;
var LiquorRecipe = models.LiquorRecipe;

function index (req, res){
    LiquorRecipe.find({}, function(err, liquorRecipes){
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log( 'liquor_recipes = ', liquorRecipes);
        res.json (liquorRecipes);
      }
    })
  }



module.exports.index = index;
