export function rotateTrustRoot(current, anchors) {
    const currentVersion = Number(current.version
        .replace("v", ""));
    return {
        id: current.id,
        version: `v${currentVersion + 1}`,
        previousVersion: current.version,
        anchors,
        createdAt: new Date()
            .toISOString()
    };
}
//# sourceMappingURL=rotate-root.js.map