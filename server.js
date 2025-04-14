import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end("Overwatch 2 - Hero Picker")
})

server.listen(3000, () => {
    console.log("Servidor está rodando em http://localhost:3000")
})