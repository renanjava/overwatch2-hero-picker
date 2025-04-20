const dataSource = require('../models/index.js')

class Services {
    constructor(nomeDoModel) {
        this.nomeDoModel = nomeDoModel
    }

    async getAllRegisters() {
        return dataSource[this.nomeDoModel].findAll()
    }
}

module.exports = Services