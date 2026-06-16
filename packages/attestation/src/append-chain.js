export function appendChain(chain, attestation) {
    return {
        ...chain,
        attestations: [
            ...chain.attestations,
            attestation
        ]
    };
}
//# sourceMappingURL=append-chain.js.map