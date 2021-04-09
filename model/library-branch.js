const mongoose = require('mongoose');
const book = require('./book');
let BranchSchema = mongoose.Schema,
    ObjectId = mongoose.Schema.ObjectId;
    
let branchSchema = new BranchSchema({
    "_id"       : mongoose.Schema.Types.ObjectId,
    "name"      : String,
    "bookCount" : {type : Number, default:0},
    "books"     : [{ type : mongoose.Schema.Types.ObjectId, ref : 'book', required : false }]
});

module.exports = mongoose.model('branch',branchSchema);