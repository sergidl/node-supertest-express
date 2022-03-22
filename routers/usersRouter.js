import Router from "express"
import userController from '../controller/userController.js'

const router=Router()
router.route("/register")
.post((req,res)=>{
    const oUser = userController('lele');

        res.send(oUser);
})

export default router