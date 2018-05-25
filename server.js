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

var liquor_typesController = require('./controllers/liquor_types')

// Home route view
app.get('/', function(req,res){
   res.send('Hello World!!!');
})

// controllers
app.get('/liquor_types', function(req, res){
    res.send('made it to liquor types')
})

// routes
app.get('/liquor_types', liquor_typesController.index);

// server start
let port = process.env.PORT || 3000;

app.listen(3000, function(){
    console.log('app works')
})
