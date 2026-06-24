import axios from "axios";

const BASE_URL =
  "http://localhost:3000";

async function main() {

  console.log(
    "\n================================="
  );

  console.log(
    "PARMANA E2E PAYMENT FLOW"
  );

  console.log(
    "=================================\n"
  );

  const businessTransactionId =
    "PAYMENT-E2E-001";

  /*
 * AUTHORIZED INTENT
 */

const executionIntent = {

  amount: 1000,

  currency: "INR",

  recipient: "merchant-123"

};

/*
 * TAMPERED EXECUTION
 */

const executionPayload = {

  amount: 1900,

  currency: "INR",

  recipient: "merchant-123"

};

  /*
   * STEP 1
   * EVALUATE
   */

  console.log(
    "STEP 1: EVALUATE"
  );

  const evaluation =
    await axios.post(

      `${BASE_URL}/evaluate`,

      {

        businessTransactionId,

        subjectId:
          "user-001",

        taskId:
          "payment.release",

        signals: {

  managerApproved: true,

  kycVerified: true

},

        executionIntent

      }

    );
console.log(
  "DECISION:"
);

console.log(
  evaluation.data.result
);

  const attestation =
    evaluation.data
      .attestation;

  console.log(
    "ATTESTATION CREATED"
  );

  /*
   * STEP 2
   * LOAD POLICY
   */

  console.log(
    "\nSTEP 2: POLICY"
  );

  const policy =
    await axios.get(

      `${BASE_URL}/policies/${attestation.policyId}`

    );

  /*
   * STEP 3
   * VERIFY
   */

  console.log(
    "\nSTEP 3: VERIFY"
  );

  const receipt =
    await axios.post(

      `${BASE_URL}/verify`,

      {

        attestation,

        policy:
          policy.data

      }

    );

  console.log(
    "RECEIPT CREATED"
  );

  /*
   * STEP 4
   * TOKEN
   */

  console.log(
    "\nSTEP 4: TOKEN"
  );

  const token =
    await axios.post(

      `${BASE_URL}/token`,

      {

        receiptId:
          receipt.data
            .receiptId

      }

    );

  console.log(
    "TOKEN CREATED"
  );

  /*
   * STEP 5
   * EXECUTE
   */

  console.log(
    "\nSTEP 5: EXECUTE"
  );

  const execution =
    await axios.post(

      `${BASE_URL}/execute`,

      {

        executionToken:
          token.data,

        executionPayload,

        executionSystem:
          "stripe",

        executionReference:
          `pi_${Date.now()}`

      }

    );

  console.log(
    "EXECUTION CREATED"
  );

  console.log(
    execution.data
  );

  /*
   * STEP 6
   * TRUST CHAIN
   */

  console.log(
    "\nSTEP 6: TRUST CHAIN"
  );

  const trustChain =
    await axios.get(

      `${BASE_URL}/trust-chain/${businessTransactionId}`

    );

  console.log(

    JSON.stringify(

      trustChain.data,

      null,

      2

    )

  );

  console.log(
    "\n================================="
  );

  console.log(
    "END TO END SUCCESS"
  );

  console.log(
    "=================================\n"
  );

}

main().catch(

  error => {

    console.error(
      "\nEND TO END FAILED\n"
    );

    console.error(

      error.response?.data ??

      error

    );

    process.exit(1);

  }

);