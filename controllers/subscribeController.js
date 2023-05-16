require("dotenv").config();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const shortid = require("shortid");
const subscribeModel=require("../models/subscribeModel");

var razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

const getSubscribtion= async function(res,req){
    try {
const email = req.body.email;
        //- before subscription cheack its alredy subscribe or not

        const subscribeId= await subscribeModel.findOne({ email: data.email })
        if(!subscribeId){

  const payment_capture = 1;
  const amount = req.body.amount;
  const currency = 'INR';

  const options = {
    amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
 
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.status(200).json({
        status: true, message: "User created successfully",
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
    
}
  } catch (err) {
    console.log(err);
  }

}

const checkSub=async function(req,res){
try{

    const subscribeId= await subscribeModel.findOne({ email: data.email })
    if (!subscribeId){
     return res.status(400).send({ status: false, msg: "You are not subscribe" })
    }else{
        return res.status(200).send({ status: true, msg: "You are  subscriber",subscribeId })
    }
}catch(err){
    return res.status(500).send({ msg: err.message })
}
}

module.exports.getSubscribtion = getSubscribtion,
module.exports.checkSub = checkSub
