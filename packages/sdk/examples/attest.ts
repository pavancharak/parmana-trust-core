import {
  ParmanaClient
} from "../src/index.js";

const client =
  new ParmanaClient(
    "http://localhost:3000"
  );

const attestation =
  await client.attest({

    task: "payment-release",

    signals: {

      businessTransactionId:
        "PAY-100",

      subjectId:
        "finance-manager-001",

      amount: 1000

    }

  });

console.log(attestation);
