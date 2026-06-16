"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBundle = verifyBundle;
function verifyBundle(bundle) {
    var errors = [];
    if (bundle.decisionId !==
        bundle.attestation.decisionId) {
        errors.push("Decision ID mismatch");
    }
    return {
        valid: errors.length === 0,
        errors: errors
    };
}
