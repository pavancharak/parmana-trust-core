import type {
  SignatureRecord
} from "./signature-record.js";

export interface AttestationV2 {
  schemaVersion: "2";

  decisionId: string;

  signatures: SignatureRecord[];

  metadata?: Record<
    string,
    unknown
  >;
}