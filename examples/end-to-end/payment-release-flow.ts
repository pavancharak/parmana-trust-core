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
   * STEP 1
   * VERIFY
   */

  console.log(
    "STEP 1: VERIFYING"
  );

  const receipt =
    await axios.post(

      `${BASE_URL}/verify`,

      {
        businessTransactionId
      }

    );

  console.log(
    "RECEIPT CREATED"
  );

  console.log(
    receipt.data
  );

  /*
   * STEP 2
   * TOKEN
   */

  console.log(
    "\nSTEP 2: TOKEN"
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
    "TOKEN ISSUED"
  );

  console.log(
    token.data
  );

  /*
   * STEP 3
   * EXECUTE
   */

  console.log(
    "\nSTEP 3: EXECUTE"
  );

  const execution =
    await axios.post(

      `${BASE_URL}/execute`,

      {

        executionToken:
          token.data,

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
   * STEP 4
   * TRUST CHAIN
   */

  console.log(
    "\nSTEP 4: TRUST CHAIN"
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

  /*
   * STEP 5
   * VALIDATION
   */

  if (

    !trustChain.data
      .decision

  ) {

    throw new Error(
      "decision missing"
    );

  }

  if (

    !trustChain.data
      .receipts
      ?.length

  ) {

    throw new Error(
      "receipts missing"
    );

  }

  if (

    !trustChain.data
      .executions
      ?.length

  ) {

    throw new Error(
      "executions missing"
    );

  }

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