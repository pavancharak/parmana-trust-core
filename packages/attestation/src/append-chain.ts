import type {
  AttestationChain,
  AttestationReference
} from "./chain.js";

export function appendChain(

  chain:
    AttestationChain,

  attestation:
    AttestationReference

): AttestationChain {

  return {

    ...chain,

    attestations: [

      ...chain.attestations,

      attestation
    ]
  };
}