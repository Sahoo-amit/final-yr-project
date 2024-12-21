const admin_middleware = async(req,res,next)=>{
    try {
        const isAdmin = req.user.isAdmin
        if(!isAdmin){
            return res.status(409).json({msg:`Access denied.`})
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = admin_middleware