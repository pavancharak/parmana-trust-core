export function verifyChain(chain) {
    const errors = [];
    const versions = chain.map(root => root.version);
    for (let i = 1; i < chain.length; i++) {
        const previous = chain[i - 1];
        const current = chain[i];
        if (current.previousVersion !==
            previous.version) {
            errors.push(`Broken chain between ${previous.version} and ${current.version}`);
        }
    }
    return {
        valid: errors.length === 0,
        versions,
        errors
    };
}
//# sourceMappingURL=verify-chain.js.map