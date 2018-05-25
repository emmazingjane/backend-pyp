var models = require('../models');
var LiquorType = models.LiquorType;

function index (req, res){
    LiquorType.find({}, function(err, liquorTypes){
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log( 'liquor_types = ', liquorTypes);
        res.json (liquorTypes);
      }
    })
  }



module.exports.index = index;
