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
      console.log(req.params.id)
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


  function update(req, res) {
    console.log(req.body.drinkName)
    LiquorRecipe.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, foundRecipe) {
      if (err) console.log('Liquor Reciper update err', err);
      foundRecipe.votes = req.body.votes
      // console.log('ID: ', req.params.id)
      res.json(foundRecipe);
    })
  }


module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
