\# Parmana Trust Core



Cryptographically verifiable decision infrastructure.



\## Features



\- Decision Attestations

\- Evidence Hashing

\- Merkle Trees

\- Trust Roots

\- Trust Chains

\- Decision Bundles

\- Verification Receipts

\- Verification CLI



\## Architecture



Decision

↓

Evidence

↓

Attestation

↓

Trust Root

↓

Trust Chain

↓

Decision Bundle

↓

Receipt

↓

Verification



\## Build



```bash

npm install

npm run build

```



\## Verify



```bash

npx tsx apps/cli/src/verify.ts loan.bundle.json

```



\## Generate Receipt



```bash

npx tsx apps/cli/src/receipt.ts loan.bundle.json

```

