const Encrypter = require("../utils/crypto.utils");

const encrypter = new Encrypter("secgit ret");

module.exports = class Locker {
  encrypt(text) {
    try {
      const encrypted_text = encrypter.encrypt(text);
      return encrypted_text;
    } catch (error) {
      console.log(error);
    }
  }

  decrypt(encrypted_text) {
    try {
      const decrypted_text = encrypter.decrypt(encrypted_text);
      return decrypted_text;
    } catch (error) {
      console.log(error);
    }
  }
};
