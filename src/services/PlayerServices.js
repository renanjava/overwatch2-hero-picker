const Services = require('./Services')

class PlayerServices extends Services {
    constructor() {
        super('Player')
    }

    async getFavoriteHeroes(id) {
        const player = await super.getOneRegister(id)
        return await player.getFavoriteHeroesByPlayer()
    }
}

module.exports = PlayerServices