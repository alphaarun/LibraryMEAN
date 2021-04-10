const mongoose = require('mongoose');
//const book = require('./book');
let AuthorSchema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;

let authorSchema = new AuthorSchema({
    _id   : mongoose.Schema.Types.ObjectId,
    name  : String,
    books : [{ type : mongoose.Schema.Types.ObjectId, ref : 'book', required : false }]
});

module.exports = mongoose.model('author',authorSchema);