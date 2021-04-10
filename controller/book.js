let BookModel = require('../model/book')
let mongoose = require('mongoose')
let authorModel = require('../model/author')
let pubCompanyModel = require('../model/publishinng-company')
let branchModel = require('../model/library-branch')
let genreModel = require('../model/genre')

exports.createBook = (req,res)=>{
    let bookModel = new BookModel({
        _id   : mongoose.Types.ObjectId(),
        name  : req.body.name,
        price : req.body.price,
        author : req.body.author._id,
        genre : req.body.genre._id,
        publisher : req.body.publisher._id,
        branch : req.body.branch._id
    });
    authorModel.findById(req.body.author._id)
        .then(author=>{
            if(!author){
                res.send('Author '+req.body.author._id+' not found')
            }
            pubCompanyModel.findById(req.body.publisher._id)
            .then(pubCompany => {
                if(!pubCompany){
                    res.send('Publisher '+req.body.publisher._id+' not found')
                }
                genreModel.findById(req.body.genre._id)
                .then(genre =>{
                    if(!genre){
                        res.send('Genre '+req.body.genre._id+' not found')
                    }
                    branchModel.findById(req.body.branch._id)
                    .then(branch =>{
                        if(!branch){
                            res.send('Branch '+req.body.branch._id+' not found')
                        }
                        bookModel.save((err,data)=>{
                            if (err){
                                console.log(err)
                            //return next(err)
                            }
                        res.send("Book Created : "+data)
                        })
                    })
                    .catch(err => {
                        res.send('Branch '+req.body.branch._id+' not found')

                    })
                })
                .catch(err => {
                    res.send('Genre '+req.body.genre._id+' not found')
                })
            }) 
            .catch(err => {
                res.send('Publisher '+req.body.publisher._id+' not found')
            })
        })
        .catch(err => {
            res.send('Author '+req.body.author._id+' not found')
        })
};

exports.getBooks = (req,res)=>{
    BookModel.find()
    .populate('genre', 'books name')
    .populate('author', 'name books')
    .populate('publisher', 'bookCount books name')
    .populate('branch', 'bookCount books name')
    //.populate('genre author publisher branch','author', 'publishCompany', 'branch')
    .exec()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error : err
        })
    })
}