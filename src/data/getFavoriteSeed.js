function getFavoriteSeed() {
    const favoriteSeed = []

    for(let i = 0; i < 10; i++) {
        const randomHeroQuantity = (Math.random() * 43)
        for(let j = 0; j < randomHeroQuantity; j++){
            favoriteSeed.push({
            hero_id: j + 1,
            player_id: i + 1,
            data_favorito: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        }
        
    }

    return favoriteSeed
}

module.exports = getFavoriteSeed