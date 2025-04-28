const Controller = require('./Controller.js')
const FavoriteServices = require('../services/FavoriteServices.js')

const favoriteServices = new FavoriteServices()

class FavoriteController extends Controller{
    constructor() {
        super(favoriteServices)
    }
}

module.exports = FavoriteController