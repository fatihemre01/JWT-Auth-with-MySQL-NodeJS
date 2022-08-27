const router = require("express").Router()
const {
    post_signup,
    post_login
}
= require("../controllers/authController")

router.post("/signup", post_signup)
router.post("/login", post_login)

module.exports = router