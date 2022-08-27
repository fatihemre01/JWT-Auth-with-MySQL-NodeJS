const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
    const token = req.cookies.jwt
    if(!token) return res.json("No token found!")
    jwt.verify(token, "secret", (err) => {
        if(err) return res.json("Invalid token")
        next()
    })
}

module.exports = {verifyToken}