let express = require('express')
let routeAuthor = express.Router()
let controller = require('../controller/author')

//get all the Authors
routeAuthor.get('/',controller.getAuthors)

//cretae one Author
routeAuthor.post('/create',controller.createAuthor)

//get One Author
routeAuthor.get('/:id',controller.getAuthor)

//update One Author
routeAuthor.put('/:id',controller.updateAuthor)

//delete One Author
routeAuthor.delete('/:id',controller.deleteAuthor)

module.exports=routeAuthor;