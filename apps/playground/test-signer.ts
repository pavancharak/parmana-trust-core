import crypto from "node:crypto";

import {
  Ed25519Signer
} from "../../packages/crypto/src/providers/ed25519.js";

const {
  privateKey,
  publicKey
} = crypto.generateKeyPairSync(
  "ed25519"
);

const signer =
  new Ed25519Signer(
    privateKey,
    publicKey
  );

const payload =
  Buffer.from(
    "hello parmana"
  );

const signature =
  await signer.sign(
    payload
  );

const valid =
  await signer.verify(
    payload,
    signature
  );

console.log({
  algorithm:
    signer.algorithm(),

  valid
});