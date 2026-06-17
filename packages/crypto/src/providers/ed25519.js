import crypto from "node:crypto";
export class Ed25519Signer {
    privateKey;
    publicKey;
    constructor(privateKey, publicKey) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }
    algorithm() {
        return "ed25519";
    }
    async sign(payload) {
        return crypto.sign(null, payload, this.privateKey);
    }
    async verify(payload, signature) {
        return crypto.verify(null, payload, this.publicKey, signature);
    }
}
//# sourceMappingURL=ed25519.js.map