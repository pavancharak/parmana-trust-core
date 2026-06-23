\# Security Policy



\## Security Philosophy



Parmana Trust Core is a trust infrastructure platform built around the principle that trust evidence should be independently verifiable.



Security is a foundational requirement of the project.



\---



\## Supported Versions



Current support status:



| Version           | Status      |

| ----------------- | ----------- |

| Main Branch       | Supported   |

| Previous Releases | Best Effort |



\---



\## Reporting Security Issues



If you discover a security vulnerability:



\* Do not publish the issue publicly.

\* Do not open a public GitHub issue.

\* Report the vulnerability privately to the project maintainers.



Please include:



\* Description of the issue

\* Impact assessment

\* Reproduction steps

\* Suggested remediation (if available)



\---



\## Cryptographic Keys



The repository contains example signing keys under:



```text

keys/

```



These keys are intentionally public and exist only for:



\* Documentation

\* Examples

\* Automated tests

\* Local development



They must never be used in production environments.



\---



\## Production Deployments



Production deployments should:



\* Generate unique signing keys

\* Protect private keys

\* Rotate keys periodically

\* Publish Trust Anchors

\* Verify trust artifacts independently



\---



\## Scope



Security reports are especially valuable for:



\* Signature verification

\* Trust Anchor publication

\* Trust Root publication

\* Attestation integrity

\* Verification logic

\* Trust chain integrity

\* Federation verification



\---



\## Security Principle



Trust evidence must be independently verifiable.



Trust assumptions should be minimized.



Verification should not require privileged access.



