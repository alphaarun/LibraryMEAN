const{ connect,connection } = require('mongoose')
const{ config } = require('dotenv')


//Exporting the module to be used from where it needs connection
module.exports= ()=>{
    config();//Initializing dotEnv File
    const uri = process.env.MONGO_URI;
   // console.log(uri);

    connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
        useCreateIndex:true
    }).then(()=>{console.log("Created connection with MongoDB at "+ new Date())})
    .catch(err => console.log(err.message));

    connection.on('connected', ()=>{
        console.log("Mongoose connected to MongoDB at "+ new Date());
    });

    connection.on('error', (err)=>{
        console.log("Connection Error in connection to MongoDB from Mongoose client at "+ new Date());
    });

    connection.on('disconnected', ()=>{
        console.log("Mongoose disconnected from MongoDB");
    });
}