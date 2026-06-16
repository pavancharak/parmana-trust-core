import type {
  DecisionAttestation
} from "@parmana/attestation";

import {
  AuditStore
} from "./audit-store.js";

export function storeAttestation(

  db: AuditStore,

  attestation: DecisionAttestation

): void {

  db.add({

    id:
      attestation.decisionId,

    type:
      "attestation",

    timestamp:
      attestation
        .metadata
        .createdAt,

    payload:
      attestation
  });
}