const con = require("../dbConnection")

module.exports.get_customers = (req, res) => {
    let sql = "SELECT * FROM customers"
    con.query(sql, (err, result) => {
        if(err) return res.json(err)
        res.json(result)
    })
}