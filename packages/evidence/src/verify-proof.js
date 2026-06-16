"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyProof = verifyProof;
var crypto = require("node:crypto");
function sha256(value) {
    return crypto
        .createHash("sha256")
        .update(value)
        .digest("hex");
}
function verifyProof(proof, root) {
    var hash = sha256(proof.leaf);
    for (var _i = 0, _a = proof.path; _i < _a.length; _i++) {
        var sibling = _a[_i];
        hash =
            sha256(hash +
                sibling);
    }
    return hash === root;
}
