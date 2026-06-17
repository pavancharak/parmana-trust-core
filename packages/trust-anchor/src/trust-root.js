export function createTrustRoot(id, anchors, version = "v1", previousVersion) {
    return {
        id,
        version,
        previousVersion,
        anchors,
        createdAt: new Date()
            .toISOString()
    };
}
//# sourceMappingURL=trust-root.js.map