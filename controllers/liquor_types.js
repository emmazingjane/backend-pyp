var models = require('../models');
var LiquorType = models.LiquorType;

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
    LiquorType.findById(req.params.liquorType_id, function(err, liquorType){
      if (err){
        console.log('LiquorType err: ', err);
        res.send(err);
      } else {
        res.json(liquorType);
      }
    });
  }
  


module.exports.index = index;
module.exports.show = show;
