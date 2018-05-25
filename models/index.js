var mongoose = require("mongoose");
var dbName = 'mongodb://localhost/pyp';
var LiquorTypeModel = require('./liquor_types')
var LiquorRecipeModel = require('./liquor_recipes')

module.exports = {
    LiquorType : LiquorTypeModel,
    LiquorRecipe : LiquorRecipeModel
}

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || dbName )
	.then(() => console.log('Mongodb connected...'))
	.catch(err => console.log(err));
// connect my models

module.exports.LiquorType = require("./liquor_types");
module.exports.LiquorRecipe = require('./liquor_recipes');
