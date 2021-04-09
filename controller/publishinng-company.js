var PubCompanySchema = require('../model/publishinng-company')
let mongoose = require('mongoose')

exports.getPubCompanies= (req,res)=>{
    console.log("getting All the PubCompanys")
    PubCompanySchema.find((err,data)=>{
        if(err) return next(err)  
        res.send(data);  
    })
};

exports.createPubCompany = (req,res)=>{
    console.log("Creating PubCompany");
    let PubCompany = new PubCompanySchema({
        name : req.body.name,
        _id  : mongoose.Types.ObjectId(),

    });

    PubCompany.save((err,data)=>{
        if (err) {
            console.log(err)
            //return next(err)
        }
        res.send("PubCompany Created : "+data)
    })
}

exports.getPubCompany = (req,res)=>{
    console.log("getting PubCompany "+req.params.id);
    PubCompanySchema.findById(req.params.id,(err,data)=>{
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

exports.deletePubCompany = (req,res)=>{
    console.log("deleting the PubCompany");
    PubCompanySchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}

exports.updatePubCompany = (req,res)=>{
    console.log("updating the PubCompany");
    PubCompanySchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        console.log(err);
        console.log(data)
        if (err) {
            console.log(err)
        }
        res.send(data);
    })
}