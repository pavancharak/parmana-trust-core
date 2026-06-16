import type {
  SignatureSet
} from "@parmana/contracts";

export interface EvidenceRecord {
  id: string;
  hash: string;
  hashAlgorithm: string;
}

export interface AttestationChain {
  chainId: string;
  attestations: string[];
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
}