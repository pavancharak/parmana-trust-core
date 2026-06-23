import crypto from "node:crypto";

async function main() {

  const response =
    await fetch(
      "http://localhost:3000/trust-anchor/public-key"
    );

  const trustAnchor =
    await response.json();

  const publicKey =
    crypto.createPublicKey(
      trustAnchor.publicKey
    );

  //
  // SAME attestation values
  // generated at:
  // 2026-06-23T01:21:19.859Z
  //

  const hash =
    "e43b9b3daccea16eada75de37a7342ad35271b0ba09ffa98e88a19b150c1ec82";

  const signature =
    "IOmZK8CGAsDM9MO8K2eWkPoeeF+FnmuxTgJHfutHfRihwcyO2CDts6v4DmSJp09EjCBKvWRvad9fhIvOCYX4Cg==";

  const valid =
    crypto.verify(

      null,

      Buffer.from(
        hash
      ),

      publicKey,

      Buffer.from(
        signature,
        "base64"
      )

    );

  console.log(
    "Trust Anchor:"
  );

  console.log(
    trustAnchor
  );

  console.log();

  console.log(
    "Verification Result:"
  );

  console.log(
    valid
      ? "VALID"
      : "INVALID"
  );

}

main().catch(
  console.error
);