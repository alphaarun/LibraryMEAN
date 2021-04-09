let express = require('express')
let branchRouter = express.Router()
let controller = require('../controller/library-branch')

//get all the branch
branchRouter.get('/',controller.getBranchs)

//get one branch
branchRouter.get('/:id',controller.getBranch)

//create one branch
branchRouter.post('/create',controller.createBranch)

//update one branch
branchRouter.put('/update/:id',controller.updateBranch)

//delete one branch
branchRouter.delete('/delete/:id',controller.deleteBranch)

module.exports=branchRouter;