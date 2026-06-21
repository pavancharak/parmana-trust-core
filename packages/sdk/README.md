# @parmana/sdk

TypeScript SDK for Parmana Trust Core.

## Install

npm install @parmana/sdk

## Example

import { ParmanaClient }
from "@parmana/sdk";

const client =
  new ParmanaClient(
    "https://api.parmana.ai"
  );

const attestation =
  await client.attest(...);

const receipt =
  await client.verify(...);

const token =
  await client.issueToken(
    receipt.receiptId
  );

const execution =
  await client.execute(...);
