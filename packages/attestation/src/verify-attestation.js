import crypto from "node:crypto";
import { provider } from "./provider.js";
import { enforceInvariant } from "@parmana/contracts";
export function verifyAttestation(attestation) {
    const hashEvidence = attestation.evidence.find(evidence => evidence.id ===
        "attestation-hash");
    enforceInvariant("INV-140", Boolean(hashEvidence));
    if (!hashEvidence) {
        throw new Error("INV-140 violation");
    }
    const expectedHash = crypto
        .createHash("sha256")
        .update(JSON.stringify({
        taskId: attestation.taskId,
        policyId: attestation.policyId,
        policyVersion: attestation.policyVersion,
        outcome: attestation.outcome,
        createdAt: attestation.metadata.createdAt
    }))
        .digest("hex");
    if (expectedHash !==
        hashEvidence.hash) {
        return false;
    }
    const signatureRecord = attestation
        .signatures
        .signatures[0];
    if (!signatureRecord) {
        return false;
    }
    const valid = provider.verify(expectedHash, signatureRecord.value);
    enforceInvariant("INV-120", valid);
    enforceInvariant("INV-121", valid);
    return valid;
}
//# sourceMappingURL=verify-attestation.js.map