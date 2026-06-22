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

      const attestation =
        req.body;


      const verified =
        verifyAttestation(
          attestation
        );


      const receipt =
  createReceipt(

    attestation.businessTransactionId,

    attestation.subjectId,

    attestation.decisionId,

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