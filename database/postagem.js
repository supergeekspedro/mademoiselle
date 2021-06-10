const cliente = require("./conexao")

async function fazerPostagem(autor, descricao) {
    const comando = "INSERT INTO postagem VALUES($1, $2);"
    try {
        await cliente.query(comando,[autor, descricao])
    }
    catch (erro) {
        console.error(erro)
        return erro
    }
}

async function pegarPostagens(){
    const comando = "SELECT * FROM postagem;"
    const resultados = await cliente.query(comando)
    return resultados.rows
}

async function excluirPostagem(autor) {
    const comando = "DELETE FROM postagem WHERE autor = $1;"
    try {
        await cliente.query(comando, [autor])
    }
    catch (erro) {
        console.error(erro)
        return erro
    }
}

module.exports = { fazerPostagem, pegarPostagens, excluirPostagem }