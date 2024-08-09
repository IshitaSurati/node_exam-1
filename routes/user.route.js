const{Router}=require ("express")
const { createUser, LoggedIn } = require("../controllers/user.controllers")
const userRouter=Router()
userRouter.post("/signup",createUser)
userRouter.post("/login",LoggedIn)






module.exports=userRouter