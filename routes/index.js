const express =  require("express")
const { fazerPostagem, pegarPostagens } = require("../database/postagem")

const route = express.Router()

route.get("/", function(req, res){
    res.render("index.pug")
})

route.get("/feed", function(req, res){
    pegarPostagens(). then(function(resultados){
        console.log(resultados)
        res.render("feed.pug", { postagens: resultados })
    })
})

route.post("/postar", function(req, res){
    const { autor, descricao } = req.body
    fazerPostagem(autor, descricao)
    res.redirect("back")
})

module.exports = route