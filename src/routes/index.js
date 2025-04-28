const express = require('express')
const heroes = require('./heroesRoute.js')
const players = require('./playersRoute.js')
const favorites = require('./favoritesRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        heroes,
        players,
        favorites
    )
}