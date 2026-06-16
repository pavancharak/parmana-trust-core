import type { SignatureSet } from "./signature-set.js";
export interface AttestationV2 {
    schemaVersion: "2";
    decisionId: string;
    signatures: SignatureSet;
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=attestation-v2.d.ts.map