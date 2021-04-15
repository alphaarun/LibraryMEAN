const mongoose = require('mongoose');
const book = require('./book');
let BranchSchema = mongoose.Schema,
    ObjectId = mongoose.Schema.ObjectId;
    
let branchSchema = new BranchSchema({
    _id       : mongoose.Schema.Types.ObjectId,
    name      : { type :String, required : true,unique: true },
    bookCount : {type : Number, default:0},
    books     : [{ type : mongoose.Schema.Types.ObjectId, ref : 'book', required : false }]
},{ versionKey: false });

module.exports = mongoose.model('branch',branchSchema);