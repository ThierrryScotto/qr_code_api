'use strict';

// dependecies
const router = require('./router/index');

// routes
const qrcode = require('./router/qrcode'); 

// constant
const basePath = "v1";

router.express.use(basePath, qrcode);