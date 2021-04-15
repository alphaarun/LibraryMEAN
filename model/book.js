const mongoose = require('mongoose')
//const author = require('./author');
//const genre = require('./genre');
//const publisher = require('./publisher');

let BookSchema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;

let bookSchema = new BookSchema({
    _id       : mongoose.Schema.Types.ObjectId, 
    name      : { type :String, required : true,unique: true },
    author    : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'author' },
    genre     : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'genre' },
    publisher : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'publishCompany' },
    branch    : { type : mongoose.Schema.Types.ObjectId, required : true, ref : 'branch' },
    price     : { type :String, required : true, unique: false },
},{ versionKey: false });

module.exports = mongoose.model('book', bookSchema);
