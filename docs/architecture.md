\# Parmana Trust Core Architecture



\## Core Principle



Humans define authority.



Organizations decide what to trust.



Parmana evaluates trusted signals against policy before execution and makes authority verifiable.



\---



\# Architectural Thesis



AI systems can generate actions.



Authority determines whether those actions are allowed.



Parmana sits between intelligence and execution.



Its role is not to execute actions and not to make decisions on behalf of organizations.



Its role is to verify that organization-defined authority requirements have been satisfied before execution occurs.



\---



\# Trust Core Flow



```text

Trusted Signals

&#x20;      |

&#x20;      v

Policy Evaluation

&#x20;      |

&#x20;      v

Decision

&#x20;      |

&#x20;      v

Attestation

&#x20;      |

&#x20;      v

Verification

&#x20;      |

&#x20;      v

Receipt

&#x20;      |

&#x20;      v

Transparency Log

&#x20;      |

&#x20;      v

Trust Root

&#x20;      |

&#x20;      v

Independent Verification

```



\---



\# Component Responsibilities



\## Trusted Signals



Signals are facts designated by an organization as authoritative inputs for policy evaluation.



Examples:



\* Human approvals

\* Banking system responses

\* KYC verification results

\* ERP records

\* Rule engine outputs

\* AI-generated recommendations



Parmana does not decide which signals are trusted.



Organizations define trusted signals.



\---



\## Policy Evaluation



Policies define the conditions under which an action may proceed.



Parmana evaluates trusted signals against policy.



Output:



```text

Approve

Deny

Escalate

```



\---



\## Decision



A decision is the policy evaluation result.



A decision contains:



\* Decision identifier

\* Task identifier

\* Policy identifier

\* Policy version

\* Outcome



Invariant:



```text

INV-100

Decision must exist before attestation issuance.

```



\---



\## Attestation



Attestations create cryptographic evidence of a decision.



Attestations contain:



\* Decision reference

\* Evidence hashes

\* Metadata

\* Signatures

\* Outcome



Invariant:



```text

INV-101

Every attestation references exactly one decision.

```



\---



\## Verification



Verification independently validates:



\* Evidence integrity

\* Signature validity

\* Decision consistency



Invariants:



```text

INV-120

Attestation signatures must be valid.



INV-121

Attestation signatures must be independently verifiable.



INV-140

Evidence must exist before attestation issuance.



INV-150

Evidence tampering must be detectable.

```



\---



\## Receipt



Receipts create cryptographic proof that verification occurred.



Receipts contain:



\* Receipt identifier

\* Decision identifier

\* Verification result

\* Verification timestamp

\* Receipt hash



Invariant:



```text

INV-160

Verification receipts must be cryptographically bound to verified attestations.

```



\---



\## Transparency Log



The transparency log creates append-only history.



Each entry references previous history.



Properties:



\* Append-only

\* Tamper-evident

\* Verifiable



Invariants:



```text

INV-103

Transparency entries reference valid receipt hashes.



INV-170

Receipt history is append-only and cryptographically linked.

```



\---



\## Trust Root



Trust roots summarize the state of the transparency log.



Trust roots are:



\* Deterministic

\* Reproducible

\* Signed



Invariants:



```text

INV-104

Trust roots are deterministically derived from receipt hashes.



INV-105

Trust root generation is reproducible.



INV-130

Trust roots must be cryptographically signed.



INV-131

Trust root signatures must be independently verifiable.

```



\---



\# Verification Sequence



Independent verifiers should validate:



1\. Evidence

2\. Attestation

3\. Receipt

4\. Transparency Chain

5\. Trust Root

6\. Public Verification Key



Only after successful verification should trust be established.



\---



\# Canonical Parmana Statement



Organizations decide what to trust.



Parmana ensures those trusted signals satisfy policy before execution.



Humans define authority.



Parmana makes authority verifiable and enforceable before execution.



