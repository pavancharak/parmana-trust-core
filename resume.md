Continue Parmana development from the latest state.

Current status:

Trust Core:
- Decision verification complete
- Attestation generation complete
- Attestation verification complete
- Receipt generation complete
- Receipt verification complete
- Transparency log complete
- Trust root generation complete
- Trust root verification complete
- Trust Core invariants implemented
- Tests passing

Authority Layer:
- Task Registry package implemented
- GET /tasks working
- POST /tasks working
- GET /tasks/:taskId working
- Turbo workspace working
- Server starts successfully

Canonical architecture is locked:

Task
 ↓
Policy
 ↓
Schema
 ↓
Signals
 ↓
Decision
 ↓
Attestation
 ↓
Receipt
 ↓
Transparency
 ↓
Trust Root

Canonical positioning is locked:

"Humans define authority. Parmana makes authority verifiable and enforceable before execution."

"Organizations decide what to trust. Parmana evaluates trusted signals against policy before execution."

Continue from the next unfinished milestone.

First inspect the current repository state, identify what is already implemented, identify blockers, and then provide the next smallest executable engineering step with exact file paths, code, build commands, and verification commands.

Do not repeat completed work.
Do not rewrite architecture.
Continue incrementally toward:
Policy Registry → Schema Registry → Signal Registry → Authority Engine.

v0.1  Trust Core Foundation        ✅
v0.2  Trust Verification APIs      ✅
v0.3  Task Registry                ✅
v0.4  Policy Registry              Next
v0.5  Schema Registry
v0.6  Signal Registry
v0.7  Authority Engine
v1.0  Authority Verification Platform