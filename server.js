const cookieParser = require("cookie-parser")
const express = require("express")
const authRoute = require("./routes/authRoute")
const crudRoute = require("./routes/crudRoute")

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(authRoute)
app.use(crudRoute)

app.listen(3000)