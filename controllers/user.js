const User = require('../models/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const cookieOptions={
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
}
exports.signUp = async(req, res)=>{
    //console.log("Signup");
    try{
        const {channelName, userName, password, profilePic, about} = req.body;
        const existingUser = await User.findOne({userName});
        
        if(existingUser){
            res.status(400).json({error: "Username already taken"});
        }
        else{
            let updatedHash = await bcrypt.hash(password, 10);
            const user = new User({channelName, userName, password, profilePic, about});
            await user.save();
            res.status(200).json({message: "User registered successfully"});
        }
    }
    catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}

exports.signIn = async(req, res, next)=>{
    try{
        const {userName, password} = req.body;
        const user  = await User.findOne({userName});

        if(user && await bcrypt.compare(password, user.password)){
            const token = jwt.sign({userId: user._id}, process.env.MY_JWT_SECRET_KEY );
            res.cookie('token',token, cookieOptions);
            res.json({message: "Logged in successfully", success: "true"});
            next();
        }
        else{
            res.status(400).json({error: "Invlid credentials"});
        }
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
}

exports.logout = async(req, res)=>{
    res.clearCookie('token', cookieOptions).json({message: "Logged out"});
}