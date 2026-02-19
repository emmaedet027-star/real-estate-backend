const express = require('express');
const router = express.router();
const favController = require('/controller/favorite.controller');
const authMiddleware = require('/middleware/authMiddleware');

router.post('/house/:id/favorite',authMiddleware, favController.addToFav);
module.exports.router;