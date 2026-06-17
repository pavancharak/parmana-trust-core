import crypto from "node:crypto";
export class ECDSASigner {
    privateKey;
    publicKey;
    constructor(privateKey, publicKey) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }
    algorithm() {
        return "ecdsa-p256";
    }
    async sign(payload) {
        return crypto.sign("sha256", payload, this.privateKey);
    }
    async verify(payload, signature) {
        return crypto.verify("sha256", payload, this.publicKey, signature);
    }
}
//# sourceMappingURL=ecdsa.js.map