const express = require('express');

const router = express.Router();

const productController = require('../api/controllers/products_controller');

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:movieId', productController.getById);
router.put('/:movieId', productController.updateById);
router.delete('/:movieId', productController.deleteById);
module.exports = router;
