const express = require('express');

const router = express.Router();

const productController = require('../api/controllers/products_controller');

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:productId', productController.getById);
router.put('/:productId', productController.updateById);
router.delete('/:productId', productController.deleteById);

module.exports = router;
