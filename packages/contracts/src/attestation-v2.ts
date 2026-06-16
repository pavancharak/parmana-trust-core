import type {
  SignatureRecord
} from "./signature-record";

export interface AttestationV2 {
  schemaVersion: "2";

  decisionId: string;

  signatures: SignatureRecord[];

  metadata?: Record<
    string,
    unknown
  >;
}