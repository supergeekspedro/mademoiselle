const express = require("express")
const app = express()

const rotas = require("./routes")

app.set("view engine", "pug")
app.set("views", "./views")
app.use(express.json())
app.use(express.urlencoded({ extended:true }) )

app.use("/public", express.static("public"))

app.use(rotas)

app.listen(3000, function(){
    console.log("SERVIDOR LIGADO")
})
