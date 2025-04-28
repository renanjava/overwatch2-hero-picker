const { Router } = require('express')
const PlayerController = require('../controllers/PlayerController')
const FavoriteController = require('../controllers/FavoriteController')

const playerController = new PlayerController()
const favoriteController = new FavoriteController()

const router = Router()

router.get('/player', (req, res) => playerController.getAll(req, res));
router.get('/player/:id', (req, res) => playerController.getOne(req, res));
router.get('/player/:id/favorites', (req, res) => favoriteController.getAllByPlayer(req, res));
router.post('/player', (req, res) => playerController.create(req, res));
router.put('/player/:id', (req, res) => playerController.update(req, res));
router.delete('/player/:id', (req, res) => playerController.delete(req, res));

module.exports = router