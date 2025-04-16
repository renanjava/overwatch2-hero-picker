import express from "express"

const app = express()
app.use(express.json())

const heroes = [
    {
        id: "1",
        heroName: "Zarya",
        players: []
    },
    {
        id: "2",
        heroName: "Soldier 76",
        players: []
    },
]

const players = [
    {
        id: "1",
        playerName: "Dafran",
        heroes: []
    },
    {
        id: "2",
        playerName: "Harbleu",
        heroes: []
    },
]

const favorites = [
    {
        idPlayer: "1",
        idHero: "1",
    },
    {
        idPlayer: "1",
        idHero: "2",
    },
    {
        idPlayer: "2",
        idHero: "1",
    },
    {
        idPlayer: "2",
        idHero: "2",
    },
]

app.get("/", (req, res) => {
    res.status(200).send("Overwatch 2 - Hero Picker")
})

app.get("/players", (req, res) => {
    res.status(200).json(players)
})

app.post("/players", (req, res) => {
    players.push(req.body)
    res.status(201).json(players)
})

app.get("/players/1", (req, res) => {
    res.status(200).json(players[0])
})

app.get("/favorites", (req, res) => {
    res.status(200).json(favorites)
})

app.post("/favorites", (req, res) => {
    favorites.push(req.body)
    res.status(201).json(favorites)
})

app.get("/players/id/favorites", (req, res) => {
    res.status(200).json(players.heroes)
})

app.get("/heroes", (req, res) => {
    res.status(200).json(heroes)
})

app.post("/heroes", (req, res) => {
    heroes.push(req.body)
    res.status(201).json(heroes)
})

export default app