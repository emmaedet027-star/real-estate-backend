const express = require('express');
const router = express.router();
const houseController = require('/controller/house.controller');
const displayController = require('/controller/display.controller');
const authMiddleware = require('/middleware/authMiddleware');

router.post('/house/create',authMiddleware, houseController.addHouse);
module.exports.router;

router.get('/house/:id',authMiddleware, displayController.displayOneHouse);
module.exports.router;