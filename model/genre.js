const mongoose = require('mongoose');
//const book = require('./book');
let GenreSchema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;
    
let genreSchema = new GenreSchema({
    _id   : mongoose.Schema.Types.ObjectId,
    name  : String,
    books : [{ type : mongoose.Schema.Types.ObjectId, ref : 'book', required : false }]
});

module.exports = mongoose.model('genre',genreSchema);