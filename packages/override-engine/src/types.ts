export interface OverrideDecision {

  overrideId: string;

  decisionId: string;

  businessTransactionId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  overrideSubjectId: string;

  overrideAction:
    "approve" |
    "reject";

  overrideReason: string;

  createdAt: string;

}

export interface OverrideAttestation {

  overrideAttestationId: string;

  overrideId: string;

  decisionId: string;

  businessTransactionId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  overrideSubjectId: string;

  overrideAction:
    "approve" |
    "reject";

  overrideReason: string;

  attestedAt: string;

  attestationHash: string;

}

export interface OverrideVerificationReceipt {

  overrideReceiptId: string;

  overrideId: string;

  decisionId: string;

  businessTransactionId: string;

  valid: boolean;

  verifiedAt: string;

}