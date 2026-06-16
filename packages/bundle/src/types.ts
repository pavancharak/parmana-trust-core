import type {
  DecisionAttestation
} from "../../attestation/src/index.js";

import type {
  EvidenceItem
} from "../../evidence/src/index.js";

import type {
  TrustRoot
} from "../../trust-anchor/src/index.js";

export interface DecisionBundle {

  bundleId: string;

  decisionId: string;

  evidence:
    EvidenceItem[];

  attestation:
    DecisionAttestation;

  trustRoot:
    TrustRoot;

  createdAt: string;
}