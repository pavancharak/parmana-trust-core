import type { SignatureSet } from "@parmana/contracts";
export interface EvidenceRecord {
    id: string;
    hash: string;
    hashAlgorithm: string;
}
export interface AttestationMetadata {
    profile: string;
    issuer?: string;
    createdAt: string;
}
export interface DecisionAttestation {
    schemaVersion: "2";
    decisionId: string;
    evidence: EvidenceRecord[];
    signatures: SignatureSet;
    metadata: AttestationMetadata;
    outcome: DecisionOutcome;
}
export interface DecisionOutcome {
    result: string;
    confidence?: number;
}
//# sourceMappingURL=types.d.ts.map