var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LiquorTypeSchema = new Schema ({
    liquorType: String,
});

var LiquorType = mongoose.model('LiquorTypes', LiquorTypeSchema);


module.exports = LiquorType;
