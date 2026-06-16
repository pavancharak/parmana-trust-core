import type {
  SignatureRecord
} from "./signature-record.js";

export interface SignatureSet {

  signatures:
    SignatureRecord[];

  threshold?: number;
}