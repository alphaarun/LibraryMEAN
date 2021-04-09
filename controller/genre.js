var GenreSchema = require('../model/genre')
let mongoose = require('mongoose')

exports.getGenres= (req,res)=>{
    console.log("getting All the Genres")
    GenreSchema.find((err,data)=>{
        if(err) return next(err)  
        res.send(data);  
    })
};

exports.createGenre = (req,res)=>{
    console.log("Creating Genre");
    let Genre = new GenreSchema({
        name : req.body.name,
        _id  : mongoose.Types.ObjectId()
    });

    Genre.save((err,data)=>{
        if (err) {
            console.log(err)
            //return next(err)
        }
        res.send("Genre Created : "+data)
    })
}

exports.getGenre = (req,res)=>{
    console.log("getting Genre "+req.params.id);
    GenreSchema.findById(req.params.id,(err,data)=>{
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

exports.deleteGenre = (req,res)=>{
    console.log("deleting the Genre");
    GenreSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

exports.updateGenre = (req,res)=>{
    console.log("updating the Genre");
    GenreSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        console.log(err);
        console.log(data)
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}