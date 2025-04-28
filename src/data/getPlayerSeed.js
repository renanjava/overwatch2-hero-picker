const { faker } = require('@faker-js/faker');
function getPlayerSeed() {
    const playerSeed = []

    for(let i = 0; i < 10; i++) {
        playerSeed.push({
            id: i + 1,
            playerName: faker.person.fullName(),
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }

    return playerSeed
}

module.exports = getPlayerSeed