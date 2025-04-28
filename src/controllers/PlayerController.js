const Controller = require('./Controller.js')
const PlayerServices = require('../services/PlayerServices.js')

const playerServices = new PlayerServices()

class PlayerController extends Controller{
    constructor() {
        super(playerServices)
    }
    async getFavoriteHeroes(req, res) {
        const { id } = req.params
        try{
            const favoritesHeroesByPlayer = await playerServices.getFavoriteHeroes(Number(id))
            if(!favoritesHeroesByPlayer) {
                return res.status(400).json({ message: 'Nenhum heroi foi favoritado por esse player'})
            }
            return res.status(200).json(favoritesHeroesByPlayer)
        }catch (erro) {
            return res.status(500).json({ message: erro.message })
        }
    }
}

module.exports = PlayerController