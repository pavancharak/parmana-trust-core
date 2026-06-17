ALTER TABLE verification_receipts
ADD COLUMN IF NOT EXISTS receipt_hash TEXT;