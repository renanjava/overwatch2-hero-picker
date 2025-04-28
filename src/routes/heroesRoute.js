const { Router } = require('express')
const HeroController = require('../controllers/HeroController')

const heroController = new HeroController()

const router = Router()

router.get('/hero', (req, res) => heroController.getAll(req, res));
router.get('/hero/:id', (req, res) => heroController.getOne(req, res));
router.post('/hero', (req, res) => heroController.create(req, res));
router.put('/hero/:id', (req, res) => heroController.update(req, res));
router.delete('/hero/:id', (req, res) => heroController.delete(req, res));

module.exports = router