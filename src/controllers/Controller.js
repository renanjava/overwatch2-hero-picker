class Controller {
    constructor(entityService) {
        this.entityService = entityService
    }

    async getAll(req, res) {
        try {
            const registryList = await this.entityService.getAllRegisters()
            return res.status(200).json(registryList)
        } catch (erro){
            return res.status(500).json({ message: erro.message })
        }
    }

    async getOne(req, res) {
        const { id } = req.params
        try {
            const registry = await this.entityService.getOneRegister(id)
            if (!registry) {
                return res.status(404).json({ message: 'Registro não encontrado' })
            }
            return res.status(200).json(registry)
        } catch (erro) {
            return res.status(500).json({ message: erro.message })
        }
    }

    async create(req, res) {
        const data = req.body
        try {
            const newRegistry = await this.entityService.createRegister(data)
            return res.status(201).json(newRegistry)
        } catch (erro) {
            return res.status(500).json({ message: erro.message })
        }
    }

    async update(req, res) {
        const { id } = req.params
        const data = req.body
        try {
            const updatedRegistry = await this.entityService.updateRegister(id, data)
            if (!updatedRegistry) {
                return res.status(404).json({ message: 'Registro não encontrado' })
            }
            return res.status(200).json(updatedRegistry)
        } catch (erro) {
            return res.status(500).json({ message: erro.message })
        }
    }

    async delete(req, res) {
        const { id } = req.params
        try {
            const deletedRegistry = await this.entityService.deleteRegister(id)
            if (!deletedRegistry) {
                return res.status(404).json({ message: 'Registro não encontrado' })
            }
            return res.status(204).send()
        } catch (erro) {
            return res.status(500).json({ message: erro.message })
        }
    }
}

module.exports = Controller