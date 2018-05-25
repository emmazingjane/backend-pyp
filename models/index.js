var mongoose = require("mongoose");
var LiquorTypeModel = require('./liquor_types')

module.exports = {
    LiquorType : LiquorTypeModel
}

var mongoose = require('mongoose')
mongoose.connect('mongodb')
