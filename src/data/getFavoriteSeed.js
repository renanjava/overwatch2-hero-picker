function getFavoriteSeed() {
    const favoriteSeed = []
    const favoriteId = 1

    for(let i = 0; i < 10; i++) {
        const randomHeroQuantity = (Math.random() * 43)
        for(let j = 0; j < randomHeroQuantity; j++){
            favoriteSeed.push({
            id: favoriteId,
            hero_id: j + 1,
            player_id: i + 1,
            data_favorito: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        })
            favoriteId++
        }
        
    }

    return favoriteSeed
}

module.exports = getFavoriteSeed