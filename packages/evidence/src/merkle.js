"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMerkleRoot = buildMerkleRoot;
var crypto = require("node:crypto");
function sha256(value) {
    return crypto
        .createHash("sha256")
        .update(value)
        .digest("hex");
}
function buildMerkleRoot(leaves) {
    var _a;
    if (leaves.length === 0) {
        throw new Error("Merkle tree requires leaves");
    }
    var level = leaves.map(sha256);
    while (level.length > 1) {
        var next = [];
        for (var i = 0; i < level.length; i += 2) {
            var left = level[i];
            var right = (_a = level[i + 1]) !== null && _a !== void 0 ? _a : left;
            next.push(sha256(left + right));
        }
        level = next;
    }
    return level[0];
}
