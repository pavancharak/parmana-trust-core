"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateTrustRoot = rotateTrustRoot;
function rotateTrustRoot(current, anchors) {
    var currentVersion = Number(current.version
        .replace("v", ""));
    return {
        id: current.id,
        version: "v".concat(currentVersion + 1),
        previousVersion: current.version,
        anchors: anchors,
        createdAt: new Date()
            .toISOString()
    };
}
