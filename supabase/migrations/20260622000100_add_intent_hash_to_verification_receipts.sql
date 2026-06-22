ALTER TABLE verification_receipts
ADD COLUMN IF NOT EXISTS intent_hash TEXT;