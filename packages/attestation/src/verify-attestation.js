"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAttestation = verifyAttestation;
function verifyAttestation(attestation) {
    return Boolean(attestation.decisionId);
}
