const jwt = require("jsonwebtoken");

// middleware function disabled for now for testing purposes
function verifyToken(req, res, next){
    const header = req.headers['authorization'];
    if (header) {
        const token = header.split(' ')[1];
        jwt.verify(token, process.env.SECRET, async (err, data) => {
            console.log(data);
            if(err){
                res.status(403).json({ err: 'Invalid token' })
            } else {
                next();
            }
        })
    } else {
        res.status(403).json({ err: 'Missing token' })
    }
    // next();
}
module.exports = {
    verifyToken
}