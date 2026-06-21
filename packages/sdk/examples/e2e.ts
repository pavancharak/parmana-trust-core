import {
  ParmanaClient
} from "../dist/index.js";

const client =
  new ParmanaClient(
    "http://localhost:3000"
  );

const attestation =
  await client.attest({

    task: "payment-release",

    signals: {

      businessTransactionId:
        "SDK-PAY-001",

      subjectId:
        "finance-manager-001",

      amount: 1000,

      currency: "USD",

      recipient:
        "vendor-001"

    }

  });

console.log(
  "ATTESTATION",
  attestation
);

const receipt =
  await client.verify({

    attestation,

    policy: {

      policyId:
        "payment-release",

      policyVersion:
        "1.0.0",

      requiredAlgorithms: [
        "ed25519"
      ]

    }

  });

console.log(
  "RECEIPT",
  receipt
);

const token =
  await client.issueToken(
    receipt.receiptId
  );

console.log(
  "TOKEN",
  token
);

const execution =
  await client.execute({

    executionToken:
      token,

    executionSystem:
      "stripe",

    executionReference:
      "sdk_pi_001"

  });

console.log(
  "EXECUTION",
  execution
);