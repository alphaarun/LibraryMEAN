const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('./initDB')();

// let url = 'mongodb+srv://dbUser:dbUser@mylearning.c9gxp.mongodb.net/eduonix?retryWrites=true&w=majority'
// mongoose.connect(url)
// mongoose.Promise=global.Promise

// let db = mongoose.connection

// db.on('error', console.error.bind(console,"Connection Error in Mongo DB"))

let authorRouter = require('./router/author')
let genreRouter = require('./router/genre')
let branchRouter = require('./router/library-branch')
let pubCompanyRouter = require('./router/publishinng-company')
let bookRouter = require('./router/book')


app.use(bodyParser.json())
app.use('/Author',authorRouter);
app.use('/Genre',genreRouter);
app.use('/LibraryBranch',branchRouter);
app.use('/PublicationCompany',pubCompanyRouter);
app.use('/Book',bookRouter);


const port = 5000;
app.listen(port, (req,res)=> {
    console.log("App is listening in port "+port +" at "+ new Date() +"\n");
});