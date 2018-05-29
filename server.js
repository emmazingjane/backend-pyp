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
app.get('/liquor_types/:type', liquor_typesController.show);
// this would be the whiskey/vodka page

// recipes/single recipe/ create recipe
app.get('/liquor_recipes', liquor_recipesController.index);
app.get('/liquor_recipes/:id', liquor_recipesController.show);
app.post('/liquor_recipes', liquor_recipesController.create);

// server start
let port = process.env.PORT || 3001;

app.listen(3001, function(){
    console.log('app works')
})
