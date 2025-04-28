const Controller = require('./Controller.js')
const PlayerServices = require('../services/PlayerServices.js')

const playerServices = new PlayerServices()

class PlayerController extends Controller{
    constructor() {
        super(playerServices)
    }
}

module.exports = PlayerController