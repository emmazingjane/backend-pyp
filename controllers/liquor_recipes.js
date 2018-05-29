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

  function show (req, res){
    LiquorRecipe.findById(req.params.id, function(err, LiquorRecipe){
      if (err){
        console.log('LiquorRecipe err: ', err);
        res.send(err);
      } else {
        res.json(LiquorRecipe);
      }
    });
  }
  
  function create (req, res){
    LiquorRecipe.create(req.body, function(err, newLiquorRecipe){
      if (err){
        console.log('New LiquorRecipe err: ', err);
        res.send(err);
      }else {
        res.json(newLiquorRecipe);
      }
    })
  }


module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
