const express = require('express');
const router = express.router();
const searchController = require('/controller/search.controller');
const authMiddleware = require('/middleware/authMiddleware');

router.get('/search/rooms',authMiddleware, searchController.searchByRooms);
module.exports.router;

router.get('/search/city', authMiddleware, searchController.searchByCity);
module.exports.router;

router.get('/search/price', authMiddleware, searchController.searchByPrice );
module.exports.router;