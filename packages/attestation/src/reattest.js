export function reattest(existing, signature) {
    return {
        ...existing,
        signatures: {
            ...existing.signatures,
            signatures: [
                ...existing.signatures.signatures,
                signature
            ]
        }
    };
}
//# sourceMappingURL=reattest.js.map