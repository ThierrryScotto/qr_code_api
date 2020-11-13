'use strict'

// dependencies
const qr = require('qr-image');

const createQrCode = (req, res) => {
    let product = req.body;

    var code = qr.image(product, { type: 'png' });
    res.setHeader('Content-type', 'image/png');  
    code.pipe(res);
};

module.exports = {
  createQrCode
};

// validar o body da requisição