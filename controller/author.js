var AuthorSchema = require('../model/author')
let mongoose = require('mongoose')

exports.getAuthors= (req,res)=>{
    console.log("getting All the Authors")
    AuthorSchema.find((err,data)=>{
        if(err) return next(err)  
        res.send(data);  
    })
};

exports.createAuthor = (req,res)=>{
    console.log("Creating Author");
    let author = new AuthorSchema({
        name : req.body.name,
        _id  : mongoose.Types.ObjectId()
    });

    author.save((err,data)=>{
        if (err) {
            console.log(err)
            //return next(err)
        }
        res.send("Author Created : "+data)
    })
}

exports.getAuthor = (req,res)=>{
    console.log("getting Author "+req.params.id);
    AuthorSchema.findById(req.params.id,(err,data)=>{
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

exports.deleteAuthor = (req,res)=>{
    console.log("deleting the Author");
    AuthorSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

exports.updateAuthor = (req,res)=>{
    console.log("updating the Author");
    AuthorSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        console.log(err);
        console.log(data)
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

exports.updateAuthorForBook = (req,res)=>{
    console.log("updating the Author");
    AuthorSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        console.log(err);
        console.log(data)
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

