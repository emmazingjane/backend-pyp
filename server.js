//requirements
const express = require('express');
const app = express();

// body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Express
app.use(express.static('Public'))

//middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });

var liquor_typesController = require('./controllers/liquor_types');
var liquor_recipesController = require('./controllers/liquor_recipes');

// Home route view
app.get('/', function(req,res){
   res.send('Hello World!!!');
})

// routes
app.get('/liquor_types', liquor_typesController.index);
// this is the home page
app.get('/liquor_types/:liquor_id', liquor_typesController.show);
// this would whiskey page
// app.put('/liquor_type/:liquor_id', liquor_typesController.update);
// changing the votes

// recipes/single recipe/ create recipe
app.get('/liquor_recipes', liquor_recipesController.index);
app.get('/liquor_recipes/:id', liquor_recipesController.show);
// this would show the recipe
app.put('/liquor_recipes/:id', liquor_recipesController.update);
// this is for the updating of votes with buttons
app.post('/liquor_recipes', liquor_recipesController.create);
// new cocktiail recipe

// server start
let port = process.env.PORT || 3001;

app.listen(3001, function(){
    console.log('app works')
})
