const Controller = require('./Controller.js')
const FavoriteServices = require('../services/FavoriteServices.js')
const favorite = require('../models/favorite.js')

const favoriteServices = new FavoriteServices()

class FavoriteController extends Controller{
    constructor() {
        super(favoriteServices)
    }

    async getAllByPlayer(req, res) {
        const { id } = req.params
        try{
            const favoritesHeroesByPlayer = await favoriteServices.getAllByPlayer(Number(id))
            if(!favoritesHeroesByPlayer) {
                return res.status(400).json({ message: 'Nenhum heroi foi favoritado por esse player'})
            }
            return res.status(200).json(favoritesHeroesByPlayer)
        }catch (erro) {
            return res.status(500).json({ message: erro.message })
        }
    }
}

module.exports = FavoriteController