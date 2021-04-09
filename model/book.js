const mongoose = require('mongoose')
//const author = require('./author');
//const genre = require('./genre');
//const publisher = require('./publisher');

let BookSchema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;

let bookSchema = new BookSchema({
    "_id"       : mongoose.Schema.Types.ObjectId, 
    "name"      : { type : String },
    "author"    : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'author' },
    "genre"     : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'genre' },
    "publisher" : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'publisher' },
    "price"     : Number
});

module.exports = mongoose.model('book', bookSchema);
