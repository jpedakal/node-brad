const express = require('express');
const router = express.Router();
const apiHandler = require('./api-handler');

router.get('/', apiHandler.welCome);
router.get('/product', apiHandler.getProduct);
router.post('/product', apiHandler.insertProduct);
router.put('/product', apiHandler.updateProduct);
router.delete('/product', apiHandler.deleteProduct);

module.exports = router;