const mongoose = require('mongoose');
//const book = require('./book');
let GenreSchema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;
    
let genreSchema = new GenreSchema({
    _id   : mongoose.Schema.Types.ObjectId,
    name  : { type :String, required : true,unique: true },
    books : [{ type : mongoose.Schema.Types.ObjectId, ref : 'book', required : false }]
},{ versionKey: false });

module.exports = mongoose.model('genre',genreSchema);