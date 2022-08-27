const con = require("../dbConnection")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

function createToken(email) {
    return jwt.sign({email}, "secret", {expiresIn: "5m"})
}

module.exports.post_signup = (req, res) => {
    let sql = `SELECT * FROM users WHERE email = ${con.escape(req.body.email)}`
    con.query(sql, async (err, result) => {
        if(result.length) return res.json("User already registered before!")

        const hashedPass = await bcrypt.hash(req.body.password, 10)
        let sql = "INSERT INTO users(name,email,password) Values ?"
        let values = [
            [req.body.name, req.body.email, hashedPass]
        ]

        con.query(sql, [values], (err, result) => {
            if(err) return res.json(err)
            res.json("User has been registered succesfully'")
        })
    })
}

module.exports.post_login = (req, res ) => {
    let sql = `SELECT * FROM users WHERE email = ${con.escape(req.body.email)}`
    
    con.query(sql, async (err, result) => {
        if(err) return res.json(err)
        if(!result.length) return res.json("Email or password is wrong!")
        const validatePass = await bcrypt.compare(req.body.password, result[0].password)
        if(validatePass) {
            const token = createToken(result[0].email)
            res.cookie("jwt", token)
            res.json("Logged in!")
        } else{
            res.json("Email or password is wrong!")
        }
    })
}