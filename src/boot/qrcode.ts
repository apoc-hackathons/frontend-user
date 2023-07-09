// import QRCode from 'qrcode';
import QRCode from 'qrcode';

// QRCode.toString(
//   'https://www.npmjs.com/package/crypto-js',
//   { type: 'terminal' },
//   function (err, url) {
//     console.log(url);
//   }
// );

export const generateQR = async (text: string) => {
  try {
    return QRCode.toDataURL(text, {
      type: 'image/webp',
      errorCorrectionLevel: 'H',
    });
  } catch (err) {
    throw err;
  }
};
