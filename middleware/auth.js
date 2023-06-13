const jwt = require("jsonwebtoken");

exports.authUser=async(rea,res,next)=>{
    try{
        let tmp = req.header("Authorization");
        const token = tmp ? tmp.slice(7,temp.length): "";
        if(!token){
            return res.status(400).json("Invalid authentication")
        }
        jwt.verify(token,process.env.TOKEN_SCRET,(err,user)=>{
            if(error){
                return res.status(400).json("Invalid authentication");
            }
            // Get user id from token and then allow the code to proceed
            req.user = user;
            next();
        });
    }catch(error){
    return res.status(500).json({message:error.message}) 
    
    }
}