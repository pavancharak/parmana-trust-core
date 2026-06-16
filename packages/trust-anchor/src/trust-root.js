"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrustRoot = createTrustRoot;
function createTrustRoot(id, anchors, version, previousVersion) {
    if (version === void 0) { version = "v1"; }
    return {
        id: id,
        version: version,
        previousVersion: previousVersion,
        anchors: anchors,
        createdAt: new Date()
            .toISOString()
    };
}
