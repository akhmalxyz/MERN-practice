const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

const auth = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({error:"No token received; authorization denied"});
    }
    else{
        try{
            const decode = jwt.verify(token, process.env.MY_JWT_SECRET_KEY);
            req.user = await User.findById(decode.userId).select("-password");
            next();
        }
        catch(err){
            res.status(401).json({error:"Invalid token; authorization denied"});
        }
    }
}

module.exports = {auth}