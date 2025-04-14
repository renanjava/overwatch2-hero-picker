import http from 'http'

const rotas = {
    "/": "Overwatch 2 - Hero Picker",
    "/players": "GET ou POST para players do Overwatch 2",
    "/players/id": "Retorna um player específico",
    "/favorites": "Adiciona um heroi favorito ao player",
    "/players/id/favorites": "Retorna a lista de favoritos do player",
    "/heroes": "Retorna a lista de herois do Overwatch 2 com paginação, filtro e ordenação",
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(rotas[req.url])
})

server.listen(3000, () => {
    console.log("Servidor está rodando em http://localhost:3000")
})