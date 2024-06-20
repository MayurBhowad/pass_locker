const crypto = require("crypto");

module.exports = class Encrypter {
  constructor(encryptionKey) {
    this.algorithm = "aes-192-cbc";
    this.key = crypto.scryptSync(encryptionKey, "salt", 24);
  }

  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    const encrypted = cipher.update(text, "utf-8", "hex");
    return [
      encrypted + cipher.final("hex"),
      Buffer.from(iv).toString("hex"),
    ].join("|");
  }

  decrypt(encrypted_text) {
    const [encrypted, iv] = encrypted_text.split("|");
    if (!iv) throw new Error("Iv not found");
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.from(iv, "hex")
    );
    return decipher.update(encrypted, "hex", "utf-8") + decipher.final("utf-8");
  }
};
