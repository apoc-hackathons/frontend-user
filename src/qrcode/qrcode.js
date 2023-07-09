var QRCode = require('qrcode')

QRCode.toString('https://www.npmjs.com/package/crypto-js',{type:'terminal'}, function (err, url) {
  console.log(url)
})
/*

// With promises
QRCode.toDataURL('I am a pony!')
  .then(url => {
    console.log(url)
  })
  .catch(err => {
    console.error(err)
  })
*/
// With async/await
const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}