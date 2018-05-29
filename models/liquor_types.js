var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LiquorTypeSchema = new Schema ({
    type: String,
    type: String,
    type: String,
    type: String,
    type: String,
    brandy: String,
});

var LiquorType = mongoose.model('LiquorTypes', LiquorTypeSchema);


module.exports = LiquorType;
