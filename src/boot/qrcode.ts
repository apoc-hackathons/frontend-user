// import QRCode from 'qrcode';
import QRCode from 'qrcode';

export const generateQR = async (text: string) => {
  try {
    return await QRCode.toDataURL(text, {
      type: 'image/webp',
      errorCorrectionLevel: 'M',
    });
  } catch (err) {
    throw err;
  }
};
