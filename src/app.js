import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Overwatch 2 - Hero Picker")
})

app.get("/players", (req, res) => {
    res.status(200).send("GET ou POST para players do Overwatch 2")
})

app.get("/players/id", (req, res) => {
    res.status(200).send("Retorna um player específico")
})

app.get("/favorites", (req, res) => {
    res.status(200).send("Adiciona um heroi favorito ao player")
})

app.get("/players/id/favorites", (req, res) => {
    res.status(200).send("Retorna a lista de favoritos do player")
})

app.get("/heroes", (req, res) => {
    res.status(200).send("Retorna a lista de herois do Overwatch 2 com paginação, filtro e ordenação")
})

export default app