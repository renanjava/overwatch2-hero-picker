const Services = require('./Services')
const dataSource = require('../models/index.js')

class FavoriteServices extends Services {
    constructor() {
        super('Favorite')
    }

    async getAllByPlayer(id) {
        return await dataSource.Favorite.findAll({
            where: {player_id: id}
        })
    }
}

module.exports = FavoriteServices