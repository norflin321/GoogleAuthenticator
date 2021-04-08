const totp = require('notp').totp;
const base32 = require('thirty-two');

const CODE = '';

(() => {
  console.log(totp.gen(base32.decode(CODE)));
})();
