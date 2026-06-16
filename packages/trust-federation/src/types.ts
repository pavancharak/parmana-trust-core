import type {
  TrustRoot
} from "@parmana/trust-anchor";

export interface TrustFederation {

  id: string;

  roots: TrustRoot[];
}