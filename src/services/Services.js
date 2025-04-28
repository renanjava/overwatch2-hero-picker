const dataSource = require('../models/index.js')

class Services {
    constructor(nomeDoModel) {
        this.nomeDoModel = nomeDoModel
    }

    async getAllRegisters() {
        return dataSource[this.nomeDoModel].findAll()
    }

    async getOneRegister(id) {
        return dataSource[this.nomeDoModel].findOne({
            where: {
                id: id
            }
        })
    }

    async createRegister(data) {
        return dataSource[this.nomeDoModel].create(data)
    }

    async updateRegister(id, data) {
        return dataSource[this.nomeDoModel].update(data, {
            where: {
                id: id
            }
        })
    }

    async deleteRegister(id) {
        return dataSource[this.nomeDoModel].destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = Services