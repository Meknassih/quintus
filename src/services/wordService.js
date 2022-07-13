import CryptoJS from 'crypto-js';

export function getTodaysWord() {
  return new Promise((resolve, reject) => {
    fetch("/.netlify/functions/getTodaysWord")
      .then(result => result.json())
      .then(result => {
        const key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_KEY);
        const iv = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV);
        const word = CryptoJS.AES.decrypt(result, key, { iv }).toString(CryptoJS.enc.Utf8);
        resolve(word);
      }).catch(error => reject(error));
  });
}