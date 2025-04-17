const { Router } = require('express')
const HeroController = require('../controllers/HeroController')

const router = Router()
router.get('/hero', HeroController.getAll)

module.exports = router