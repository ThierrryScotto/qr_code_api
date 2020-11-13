'use strict';

// dependecies
const express = require('./index');

// controllers .
const qrcodeRetriveController = require('../controllers/qrcode/retrive.controller');

express.router.post('/generate/qrcode', qrcodeRetriveController.createQrCode);

module.exports = express.router;  