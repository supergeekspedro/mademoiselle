const { Client } = require("pg")

const cliente = new Client({
    "host": "localhost",
    "database": "mademoiselle",
    "port": 5432,
    "user": "postgres",
    "password": "password"
})

cliente.connect()

module.exports = cliente