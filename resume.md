Parmana Trust Core - Phase 2



Current state:



Completed:



\* Task Registry persisted in Supabase

\* Policy Registry persisted in Supabase

\* Schema Registry persisted in Supabase

\* Signal Registry persisted in Supabase

\* Authority Engine reads registries asynchronously

\* /evaluate survives server restart

\* End-to-end evaluation returns approved or denied



Example:



Task

→ payment.release



Policy

→ payment-policy-v1



Schema

→ payment-schema-v1



Signals

→ managerApproved

→ kycVerified



Decision

→ approved



Goal:



Transform Parmana from a registry-validation engine into an authority-decision engine.



Phase 2 requirements:



1\. Decision Model



Create a Decision object:



{

decisionId: string,

taskId: string,

policyId: string,

policyVersion: string,

action: "approved" | "denied",

reasons: string\[],

timestamp: string

}



2\. Decision IDs



Generate a UUID for every decision.



Decision IDs must be unique and returned in every evaluation response.



3\. Decision Persistence



Persist every decision into authority\_decisions.



Fields:



decision\_id

task\_id

policy\_id

policy\_version

action

reason

decision

created\_at



4\. Evaluation Result



Change /evaluate response to:



{

decisionId: "...",

decision: "approved",

reasons: \[]

}



5\. Attestation Integration



When a decision is produced:



\* create an attestation

\* store the attestation

\* link attestation to decisionId



6\. Transparency Log Integration



Write every decision hash to transparency\_log.



Store:



decisionId

decisionHash

timestamp



7\. Verification Receipt



Generate a receipt:



{

receiptId,

decisionId,

taskId,

policyId,

decision,

attestationId,

timestamp

}



Persist receipt.



8\. Evaluation Flow



Task

→ Policy

→ Schema

→ Signal Validation

→ Decision

→ Decision Persistence

→ Attestation

→ Transparency Log

→ Verification Receipt

→ API Response



9\. Future Policy Rules



Keep architecture ready for:



policy.definition.rules



Examples:



{

"all": \[

"managerApproved",

"kycVerified"

]

}



Do not implement rule evaluation yet.



Only prepare interfaces and evaluation pipeline for future rule execution.



Deliverable:



A complete authority decision pipeline with:



\* decision IDs

\* persistence

\* attestations

\* transparency logs

\* verification receipts



while preserving the existing Task → Policy → Schema → Signal architecture.



