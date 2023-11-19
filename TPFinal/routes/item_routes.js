const express = require('express');
const itemController = require('../controllers/item_controller');
const topicsController = require('../controllers/topics_controller');

const router = express.Router();

router.get('/getUsus', itemController.getUsus);
router.get('/getText', topicsController.getText);
router.post('/checkUsu', itemController.checkUsu);
router.post('/addUsu', itemController.addUsu);
router.post('/items/:id', itemController.getItemById);
module.exports = router;
