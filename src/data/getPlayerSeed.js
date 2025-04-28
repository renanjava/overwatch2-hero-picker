const { faker } = require('@faker-js/faker');
function getPlayerSeed() {
    const playerSeed = []

    for(let i = 0; i < 10; i++) {
        playerSeed.push({
            playerName: faker.name.fullName(),
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }

    return playerSeed
}

module.exports = getPlayerSeed