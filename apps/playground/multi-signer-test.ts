import {
  SignerFactory
} from "../../packages/crypto/src/factory.js";

async function main() {

  const payload =
    Buffer.from(
      "Decision Evidence"
    );

  const algorithms = [
    "ed25519",
    "ecdsa-p256"
  ] as const;

  for (const algorithm of algorithms) {

    const signer =
      SignerFactory.create(
        algorithm
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
      algorithm,
      valid
    });
  }
}

main().catch(
  console.error
);