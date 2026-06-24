import express from "express";

import {
  verifyAttestation,
  createReceipt,
  verifyReceipt
} from "@parmana/attestation";

import {
  saveReceipt
} from "@parmana/audit-db";


const router =
  express.Router();


router.post(
  "/receipt",
  async (req, res) => {

    try {
console.log(
  "RECEIPT ROUTE HIT"
);
      const attestation =
        req.body;
console.log(
  "ATTESTATION:",
  JSON.stringify(
    attestation,
    null,
    2
  )
);

      const verified =
        verifyAttestation(
          attestation
        );


      const receipt =
  createReceipt(

    attestation.businessTransactionId,

    attestation.subjectId,

    attestation.decisionId,

    attestation.intent.intentId,

    attestation.taskId,

    attestation.policyId,

    attestation.policyVersion,

    attestation.intent.intentHash,

    verified

  ); 


      verifyReceipt(
        receipt
      );


      await saveReceipt(
        receipt
      );
console.log(
  "RECEIPT BEFORE SAVE:",
  JSON.stringify(
    receipt,
    null,
    2
  )
);

      res.json(
        receipt
      );


    } catch (error) {


      console.error(
        "RECEIPT ERROR:",
        error
      );


      res.status(500)
        .json({

          error:
            error instanceof Error
              ? error.message
              : String(error)

        });


    }

  }

);


export default router;