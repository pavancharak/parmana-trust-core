\# Authority Engine



\## Overview



The Authority Engine evaluates whether a subject is authorized to perform a requested task within a trust domain.



It is the entry point for authorization decisions within Parmana Trust Core.



\## Responsibilities



\* Resolve subject authority

\* Evaluate authorization policies

\* Process authorization signals

\* Generate authorization decisions

\* Preserve authorization evidence



\## Inputs



\* Subject

\* Task

\* Policy

\* Signals



\## Outputs



\* Authorization Decision

\* Decision Metadata

\* Evaluation Evidence



\## Trust Lifecycle Position



Subject → Task → Policy → Authority Decision



\## Related Documentation



\* docs/architecture/authorization-model.md

\* docs/phases/phase-02-subject-resolution.md

\* docs/phases/phase-05-decision-generation.md



\## Status



Active



