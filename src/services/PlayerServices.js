const Services = require('./Services')
const Yup = require('yup');

class PlayerServices extends Services {
    constructor() {
        super('Player')
    }
    async validatePlayerData(data) {
        const schema = Yup.object().shape({
            playerName: Yup.string()
                .required('Nome do jogador é obrigatório.')
                .min(3, 'Nome do jogador deve ter pelo menos 3 caracteres.'),
        });

        try {
            await schema.validate(data, { abortEarly: false });
        } catch (error) {
            throw new Error(error.errors.join(', '));
        }
    }

    async createRegister(data) {
        await this.validatePlayerData(data);

        return super.createRegister(data);
    }
}

module.exports = PlayerServices