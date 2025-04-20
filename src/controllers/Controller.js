class Controller {
    constructor(entityService) {
        this.entityService = entityService
    }

    async getAll(req, res) {
        try {
            const registryList = await this.entityService.getAllRegisters()
            return res.status(200).json(registryList)
        } catch (erro){

        }
    }
}

module.exports = Controller