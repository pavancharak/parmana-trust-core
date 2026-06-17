CREATE TABLE IF NOT EXISTS verification_receipts (

  receipt_id TEXT PRIMARY KEY,

  decision_id TEXT NOT NULL,

  valid BOOLEAN NOT NULL,

  verified_algorithms JSONB NOT NULL,

  failed_algorithms JSONB NOT NULL,

  verified_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS
idx_verification_receipts_decision_id
ON verification_receipts(decision_id);

CREATE INDEX IF NOT EXISTS
idx_verification_receipts_verified_at
ON verification_receipts(verified_at);