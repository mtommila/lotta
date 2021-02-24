crypto = require('crypto');

if (process.argv.length <= 3) {
  console.log("Usage: encrypt <key> <message>");
  process.exit(1);
}
let key = process.argv[2];
const message = process.argv[3];

const iv = crypto.createHash("sha256").update(key).digest("hex");
console.log("IV is: " + iv);

while (key.length < 32) {
  key += key;
}
key = key.substring(0, 32);

const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
console.log("Block: " + cipher.update(message, "utf8", "hex"));
console.log("Final: " + cipher.final("hex"));
