let express = require('express')
let genreRouter = express.Router()
let controller = require('../controller/genre')

//get all the genre
genreRouter.get('/',controller.getGenres)

//get one genre
genreRouter.get('/:id',controller.getGenre)

//create one genre
genreRouter.post('/create',controller.createGenre)

//update one genre
genreRouter.put('/:id',controller.updateGenre)

//delete one genre
genreRouter.delete('/:id',controller.deleteGenre)

module.exports=genreRouter;