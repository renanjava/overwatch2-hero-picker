const Controller = require('./Controller.js')
const HeroServices = require('../services/HeroServices.js')

const heroServices = new HeroServices()

class HeroController extends Controller{
    constructor() {
        super(heroServices)
    }
}

module.exports = HeroController