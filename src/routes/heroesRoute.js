const { Router } = require('express')
const HeroController = require('../controllers/HeroController')

const heroController = new HeroController()

const router = Router()

router.get('/hero', (req, res) => heroController.getAll(req, res))

module.exports = router