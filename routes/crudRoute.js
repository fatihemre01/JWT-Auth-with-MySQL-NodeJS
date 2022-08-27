const router = require("express").Router()
const {verifyToken} = require("../middlewares/authMiddleware")
const {
    get_customers
}
= require("../controllers/crudController")

router.get("/get-customers", verifyToken, get_customers)

module.exports = router