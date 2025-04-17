const database = require('../models/index.js')

class HeroController {
    static async getAll(req, res) {
        try{
            const heroesList = await database.Hero.findAll()
            return res.status(200).json(heroesList)
        } catch (erro) {
             
        }
    }
}

module.exports = HeroController