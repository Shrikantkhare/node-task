const  express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const subscribecontroller=require("../controllers/subscribeController")
const middlewares = require("../middlewares/auth")


router.post("/register",userController.createUser )
router.post("/login",userController.login )
router.post("/subscribe",middlewares.authentication,subscribecontroller.getSubscribtion )
router.get("/check-sub",middlewares.authentication,subscribecontroller.checkSub )


module.exports = router