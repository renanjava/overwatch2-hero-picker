const express = require('express')
const heroes = require('./heroesRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        heroes
    )
}