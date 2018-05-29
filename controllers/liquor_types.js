var models = require('../models');
var LiquorType = models.LiquorType;
var LiquorRecipe = models.LiquorRecipe;

function index (req, res){
    LiquorType.find({}, function(err, liquorTypes){
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log( 'liquor_types = ', err, liquorTypes);
        res.json (liquorTypes);
      }
    })
  }

  // show liquor type find by id
  function show (req, res){
    let liquor_id = req.params.liquor_id;
    LiquorType.findById(liquor_id, function(err, foundLiquor) {

      let foundType = foundLiquor.liquorType;
      LiquorRecipe.find({liquorType: foundType}, function(err, foundRecipes){
        if(err){
          res.json(err);
        } else {
          res.json(foundRecipes);
        }
      })
    })
  }


  // function show (req, res){
  //   // Update this to Liqour_Recipes.find()
  //   LiquorType.findById(req.params.liquor_id, function(err, liquorType){
  //     if (err){
  //       console.log('LiquorType err: ', err);
  //       res.send(err);
  //     } else {
  //       res.json(liquorType);
  //     }
  //   });
  // }
  


module.exports.index = index;
module.exports.show = show;
