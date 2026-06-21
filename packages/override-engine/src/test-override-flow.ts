import {
  createOverrideDecision,
  createOverrideAttestation,
  verifyOverrideAttestation
} from "./index.js";

const override =
  createOverrideDecision({

    decisionId:
      "DEC-001",

    businessTransactionId:
      "CLAIM-001",

    taskId:
      "insurance.claim.approve",

    policyId:
      "insurance-claim-approval",

    policyVersion:
      "1.0.0",

    overrideSubjectId:
      "claims-manager-123",

    overrideAction:
      "approve",

    overrideReason:
      "manual_review_completed"

  });

console.log(
  "\nOVERRIDE DECISION\n"
);

console.log(
  override
);

const attestation =
  createOverrideAttestation(
    override
  );

console.log(
  "\nOVERRIDE ATTESTATION\n"
);

console.log(
  attestation
);

const receipt =
  verifyOverrideAttestation(
    attestation
  );

console.log(
  "\nOVERRIDE RECEIPT\n"
);

console.log(
  receipt
);