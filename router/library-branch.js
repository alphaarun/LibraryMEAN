let express = require('express')
let branchRouter = express.Router()
let controller = require('../controller/library-branch')

//get all the branch
branchRouter.get('/',controller.getBranches)

//get one branch
branchRouter.get('/:id',controller.getBranch)

//create one branch
branchRouter.post('/create',controller.createBranch)

//update one branch
branchRouter.put('/:id',controller.updateBranch)

//delete one branch
branchRouter.delete('/:id',controller.deleteBranch)

module.exports=branchRouter;