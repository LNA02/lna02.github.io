class authen{
    authentication(req,res,next){
        if(req.cookies.user){
            next()
        }
        else{
            res.redirect('/authentication')
        }
    }
}
module.exports = new authen







// const jwt = require("jsonwebtoken");
// const config = process.env ;
// const verifyToken = (res, req, next) => {
//         const token =
//             req.body.token || req.query.token || req.headers["x-access-token"];

//         if(!token) {
//             return  res.status(403).send("A token is required for authentication");
//         }
//         try {
//             const decoded = jwt.verify(token, config.TOKEN_KEY);
//             req.user = decoded ;
//         } catch (err) {
//             return res.status(401).send("Invalid Token");
//         }
//         return next() ;
//     }


// module.exports = verifyToken ;