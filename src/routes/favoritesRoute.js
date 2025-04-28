const { Router } = require('express')
const FavoriteController = require('../controllers/FavoriteController')

const favoriteController = new FavoriteController()

const router = Router()

router.get('/favorite', (req, res) => favoriteController.getAll(req, res));
router.get('/favorite/:id', (req, res) => favoriteController.getOne(req, res));
router.post('/favorite', (req, res) => favoriteController.create(req, res));
router.put('/favorite/:id', (req, res) => favoriteController.update(req, res));
router.delete('/favorite/:id', (req, res) => favoriteController.delete(req, res));

module.exports = router