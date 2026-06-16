import {
  appendChain
} from "../../packages/attestation/src/index.js";

let chain = {

  chainId: "decision-1",

  attestations: []
};

chain = appendChain(

  chain,

  {
    attestationId:
      "attestation-a",

    createdAt:
      new Date()
        .toISOString()
  }
);

chain = appendChain(

  chain,

  {
    attestationId:
      "attestation-b",

    createdAt:
      new Date()
        .toISOString()
  }
);

console.log(
  JSON.stringify(
    chain,
    null,
    2
  )
);