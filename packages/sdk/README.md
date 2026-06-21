# \# @parmana/sdk

# 

# TypeScript SDK for Parmana Trust Core.

# 

# Parmana prevents unauthorized autonomous actions.

# 

# Parmana verifies human-defined authority and organizational policy before autonomous systems act.

# 

# \---

# 

# \## Installation

# 

# ```bash

# npm install @parmana/sdk

# ```

# 

# \---

# 

# \## Create Client

# 

# ```typescript

# import {

# &#x20; ParmanaClient

# } from "@parmana/sdk";

# 

# const client =

# &#x20; new ParmanaClient(

# &#x20;   "http://localhost:3000"

# &#x20; );

# ```

# 

# \---

# 

# \## Create Attestation

# 

# ```typescript

# const attestation =

# &#x20; await client.attest({

# 

# &#x20;   task: "payment-release",

# 

# &#x20;   signals: {

# 

# &#x20;     businessTransactionId:

# &#x20;       "PAY-001",

# 

# &#x20;     subjectId:

# &#x20;       "finance-manager-001",

# 

# &#x20;     amount: 1000,

# 

# &#x20;     currency: "USD",

# 

# &#x20;     recipient: "vendor-001"

# &#x20;   }

# &#x20; });

# ```

# 

# \---

# 

# \## Verify Attestation

# 

# ```typescript

# const receipt =

# &#x20; await client.verify({

# 

# &#x20;   attestation,

# 

# &#x20;   policy: {

# 

# &#x20;     policyId:

# &#x20;       "payment-release",

# 

# &#x20;     policyVersion:

# &#x20;       "1.0.0",

# 

# &#x20;     requiredAlgorithms: \[

# &#x20;       "ed25519"

# &#x20;     ]

# &#x20;   }

# &#x20; });

# ```

# 

# \---

# 

# \## Issue Execution Token

# 

# ```typescript

# const token =

# &#x20; await client.issueToken(

# &#x20;   receipt.receiptId

# &#x20; );

# ```

# 

# \---

# 

# \## Record Execution

# 

# ```typescript

# const execution =

# &#x20; await client.execute({

# 

# &#x20;   executionToken:

# &#x20;     token,

# 

# &#x20;   executionSystem:

# &#x20;     "stripe",

# 

# &#x20;   executionReference:

# &#x20;     "stripe\_pi\_001"

# &#x20; });

# ```

# 

# \---

# 

# \## Retrieve Trust Chain

# 

# ```typescript

# const chain =

# &#x20; await client.getTrustChain(

# &#x20;   "PAY-001"

# &#x20; );

# ```

# 

# \---

# 

# \## Trust Chain

# 

# ```text

# Subject

# &#x20; ↓

# Task

# &#x20; ↓

# Policy

# &#x20; ↓

# Decision Attestation

# &#x20; ↓

# Verification Receipt

# &#x20; ↓

# Execution Token

# &#x20; ↓

# Execution Record

# &#x20; ↓

# External System

# ```

# 

# \---

# 

# \## Documentation

# 

# OpenAPI Specification:

# 

# docs/openapi/parmana-trust-core-v0.4.yaml

# 

# Whitepaper:

# 

# docs/whitepapers/execution-trust-chain-v0.4.md

# 

# \---

# 

# \## License

# 

# Apache-2.0



