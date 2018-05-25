var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LiquorTypeSchema = new Schema ({
    whiskey: String,
    vodka: String,
    rum: String,
    gin: String,
    tequila: String,
    brandy: String,
});

var LiquorType = mongoose.model('LiquorTypes', LiquorTypeSchema);


module.exports = LiquorType;
