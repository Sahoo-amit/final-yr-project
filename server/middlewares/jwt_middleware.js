const jwt = require('jsonwebtoken')
const User = require('../database/userModel')

const jwt_middleware = async(req,res,next)=>{
    const token = await req.header("Authorization")
    if(!token){
        return res.status(401).json({msg:`Token not found`})
    }
    try {
        const updatedToken = token.replace("Bearer","").trim()
        const isVerified = jwt.verify(updatedToken, process.env.JWT_TOKEN)
        const userData = await User.findOne({email: isVerified.email})
        if(userData === null){
            return res.status(409).json({msg:`User not found`})
        }

        req.user = userData
        req.token = isVerified
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = jwt_middleware