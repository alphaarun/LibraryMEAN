var LibrarySchema = require('../model/library-branch')
let mongoose = require('mongoose')

exports.getBranches= (req,res)=>{
    console.log("getting All the Branchs")
    LibrarySchema.find((err,data)=>{
        if(err) return next(err)  
        res.send(data);  
    })
};

exports.createBranch = (req,res)=>{
    console.log("Creating Branch");
    let Branch = new LibrarySchema({
        name : req.body.name,
        _id  : mongoose.Types.ObjectId(),

    });

    Branch.save((err,data)=>{
        if (err) {
            console.log(err);
            res.status(500).json({
                error : err
            })
        }
        res.send("Branch Created : "+data)
    })
}

exports.getBranch = (req,res)=>{
    console.log("getting Branch "+req.params.id);
    LibrarySchema.findById(req.params.id,(err,data)=>{
        if (err) {
            console.log(err);
            res.status(500).json({
                error : err
            })
        }
        res.send(data);
    })
}

exports.deleteBranch = (req,res)=>{
    console.log("deleting the Branch");
    LibrarySchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            console.log(err);
            res.status(500).json({
                error : err
            })
        }
        res.send(data);
    })
}

exports.updateBranch = (req,res)=>{
    console.log("updating the Branch");
    LibrarySchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        console.log(err);
        console.log(data)
        if (err) {
            console.log(err);
            res.status(500).json({
                error : err
            })
        }
        res.send(data);
    })
}