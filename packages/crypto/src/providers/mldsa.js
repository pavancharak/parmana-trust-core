export class MLDSASigner {
    algorithm() {
        return "ml-dsa-65";
    }
    async sign(_payload) {
        throw new Error("ML-DSA provider not implemented");
    }
    async verify(_payload, _signature) {
        throw new Error("ML-DSA provider not implemented");
    }
}
//# sourceMappingURL=mldsa.js.map