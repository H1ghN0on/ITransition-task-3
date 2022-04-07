const crypto = require('crypto');

class HMACGenerator {
    static generate(secretKey, value) {
        return crypto.createHmac(
        "sha3-256", 
        secretKey
    )
        .update(value)
        .digest('hex');
    }
}

module.exports = HMACGenerator;