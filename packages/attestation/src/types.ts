import type {
  SignatureSet
} from "@parmana/contracts";

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

export interface DecisionOutcome {
  result: string;
  confidence?: number;
}

export interface IntentBinding {
  hashAlgorithm: string;
  intentHash: string;
}

export interface DecisionAttestation {

  schemaVersion: "2";

  decisionId: string;

  businessTransactionId: string;

  subjectId?: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  intent?: IntentBinding;

  evidence: EvidenceRecord[];

  signatures: SignatureSet;

  metadata: AttestationMetadata;

  outcome: DecisionOutcome;
}