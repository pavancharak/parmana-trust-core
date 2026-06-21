# \# parmana-sdk

# 

# Python SDK for Parmana Trust Core.

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

# pip install parmana-sdk

# ```

# 

# \---

# 

# \## Create Client

# 

# ```python

# from parmana\_sdk import ParmanaClient

# 

# client = ParmanaClient(

# &#x20;   "http://localhost:3000"

# )

# ```

# 

# \---

# 

# \## Create Attestation

# 

# ```python

# attestation = client.attest({

# &#x20;   "task": "payment-release",

# &#x20;   "signals": {

# &#x20;       "businessTransactionId":

# &#x20;           "PAY-001",

# &#x20;       "subjectId":

# &#x20;           "finance-manager-001",

# &#x20;       "amount": 1000,

# &#x20;       "currency": "USD",

# &#x20;       "recipient": "vendor-001"

# &#x20;   }

# })

# ```

# 

# \---

# 

# \## Verify Attestation

# 

# ```python

# receipt = client.verify({

# &#x20;   "attestation": attestation,

# &#x20;   "policy": {

# &#x20;       "policyId":

# &#x20;           "payment-release",

# &#x20;       "policyVersion":

# &#x20;           "1.0.0",

# &#x20;       "requiredAlgorithms": \[

# &#x20;           "ed25519"

# &#x20;       ]

# &#x20;   }

# })

# ```

# 

# \---

# 

# \## Issue Execution Token

# 

# ```python

# token = client.issue\_token(

# &#x20;   receipt\["receiptId"]

# )

# ```

# 

# \---

# 

# \## Record Execution

# 

# ```python

# execution = client.execute({

# &#x20;   "executionToken": token,

# &#x20;   "executionSystem": "stripe",

# &#x20;   "executionReference": "stripe\_pi\_001"

# })

# ```

# 

# \---

# 

# \## Retrieve Trust Chain

# 

# ```python

# chain = client.get\_trust\_chain(

# &#x20;   "PAY-001"

# )

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

# \## Execution Trust Infrastructure

# 

# AI systems can generate actions.

# 

# Organizations define authority.

# 

# Parmana verifies that authority before execution occurs.

# 

# \---

# 

# \## License

# 

# Apache-2.0



