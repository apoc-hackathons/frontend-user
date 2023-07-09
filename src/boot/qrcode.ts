// import QRCode from 'qrcode';
const QRCode = require('qrcode');

// QRCode.toString(
//   'https://www.npmjs.com/package/crypto-js',
//   { type: 'terminal' },
//   function (err, url) {
//     console.log(url);
//   }
// );

const opts = {
  errorCorrectionLevel: 'H',
  type: 's',
  quality: 2,
  margin: 1,
  color: {
    dark: '#010599FF',
    light: '#FFBF60FF',
  },
};

export const generateQR = async (text: string) => {
  try {
    return QRCode.toDataURL(text, opts);
  } catch (err) {
    throw err;
  }
};
