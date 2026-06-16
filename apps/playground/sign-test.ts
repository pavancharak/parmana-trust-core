import {
  SignerFactory
} from "../../packages/crypto/src/factory.js";

async function main() {

  const signer =
    SignerFactory.create(
      "ed25519"
    );

  const payload =
    Buffer.from(
      "Parmana Trust Core"
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
}

main().catch(
  console.error
);