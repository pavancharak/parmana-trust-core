"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashBundle = hashBundle;
var crypto = require("node:crypto");
function hashBundle(bundle) {
    var canonical = JSON.stringify(bundle);
    return crypto
        .createHash("sha256")
        .update(canonical)
        .digest("hex");
}
