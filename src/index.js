'use strict'

// dependecies
const router = require('./routes/index');

// routes
const qrcode = require('./routes/_qrcode');

// constant
const basePath = '/v1';

router.express.use(basePath,  qrcode);