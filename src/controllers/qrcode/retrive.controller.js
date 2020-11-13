'use strict'

// dependencies
const qr = require('qr-image');

const createQrCode = (req, res) => {
    const product = req.body;

    const jsonProduct = JSON.stringify(product);

    var code = qr.image(jsonProduct, { type: 'png' });
    res.setHeader('Content-type', 'image/png');  
    code.pipe(res);
};

module.exports = {
  createQrCode
};

// validar o body da requisição