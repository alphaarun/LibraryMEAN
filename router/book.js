let express = require('express')
let routeBook = express.Router()
let controller = require('../controller/book')

// //get all the books
// routeBook.get('/',controller.getBooks)

// //get one of the book
// routeBook.get('/:id',controller.getBook)

// //create one branch
// routeBook.post('/create',controller.createBook)

// //update a book
// routeBook.put('/update/:id',controller.updateBook)

// //delete a book
// routeBook.delete('/delete/:id',controller.deleteBook)

module.exports=routeBook;