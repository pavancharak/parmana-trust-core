"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashEvidence = hashEvidence;
var crypto = require("node:crypto");
function hashEvidence(payload) {
    var canonical = JSON.stringify(payload);
    return crypto
        .createHash("sha256")
        .update(canonical)
        .digest("hex");
}
