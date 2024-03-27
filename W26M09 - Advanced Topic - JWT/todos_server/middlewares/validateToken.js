const SECRET = 'this_must_be_secret';
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const {usertoken} = req.headers;

    jwt.verify(usertoken, SECRET, (err, decoded) => {
        if(err){
            return res.status(406).json({message: "Invalid token (Unauthorized)"});
        }
        req.userInfo = decoded;
        next();
    });
}

module.exports = validateToken;