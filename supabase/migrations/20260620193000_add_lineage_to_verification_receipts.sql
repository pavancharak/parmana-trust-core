ALTER TABLE verification_receipts
ADD COLUMN IF NOT EXISTS subject_id TEXT;

ALTER TABLE verification_receipts
ADD COLUMN IF NOT EXISTS policy_id TEXT;

ALTER TABLE verification_receipts
ADD COLUMN IF NOT EXISTS policy_version TEXT;