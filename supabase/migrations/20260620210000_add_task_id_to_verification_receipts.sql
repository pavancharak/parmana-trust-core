ALTER TABLE verification_receipts
ADD COLUMN IF NOT EXISTS task_id TEXT;