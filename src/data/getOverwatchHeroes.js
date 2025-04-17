const axios = require("axios")
function getApiData() {
    return axios.get("https://overfast-api.tekrop.fr/heroes")
        .then(response => {
            const data = response.data.map(hero => {
                const newColumns = {...hero, createdAt: new Date(), updatedAt: new Date()}
                return newColumns
            })
            return data
        })
        .catch(error => console.error(error.message))
}

module.exports = getApiData