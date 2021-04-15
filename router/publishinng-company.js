let express = require('express')
let routePubCompany = express.Router()
let controller = require('../controller/publishinng-company')

//get all the publication company
routePubCompany.get('/',controller.getPubCompanies)

//get one publication company
routePubCompany.get('/:id',controller.getPubCompany)

//create one branch
routePubCompany.post('/create',controller.createPubCompany)

//update one publication company
routePubCompany.put('/:id',controller.updatePubCompany)

//delete one publication company
routePubCompany.delete('/:id',controller.deletePubCompany)

module.exports=routePubCompany;