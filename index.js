const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.set("view engine", "ejs")
app.use(express.static("public"))
app.set("views", "views")
app.use("", require("./routes/routes"))
app.listen(3000, () => {
    console.log("Here http://localhost:3000")
})