const express =  require("express")
const { fazerPostagem, pegarPostagens, excluirPostagem } = require("../database/postagem")

const route = express.Router()

route.get("/", function(req, res){
    res.render("index.pug")
})

route.get("/feed", function(req, res){
    pegarPostagens(). then(function(resultados){
        res.render("feed.pug", { postagens: resultados })
    })
})

route.get("/post", function(req, res) {
    res.render("post.pug")
})

route.post("/postar", function(req, res){
    const { autor, descricao } = req.body
    fazerPostagem(autor, descricao)
    res.redirect("back")
})

route.get("/deletar/:autor", function(req, res) {
    const { autor } = req.params
    excluirPostagem(autor)
    res.redirect("back")
})

module.exports = route