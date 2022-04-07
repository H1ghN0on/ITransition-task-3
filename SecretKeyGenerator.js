const crypto = require('crypto');

class SecretKeyGenerator {
    static generate() {
        return crypto.randomBytes(32).toString("hex");
    }
}

module.exports = SecretKeyGenerator