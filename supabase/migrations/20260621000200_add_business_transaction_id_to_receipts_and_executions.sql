-- =====================================================
-- ADR-0004 Business Transaction Binding
-- Extend lineage across the full trust chain
-- =====================================================

alter table verification_receipts
add column if not exists
business_transaction_id text;

alter table execution_records
add column if not exists
business_transaction_id text;

-- =====================================================
-- Indexes
-- =====================================================

create index if not exists
idx_verification_receipts_business_txn
on verification_receipts (
  business_transaction_id
);

create index if not exists
idx_execution_records_business_txn
on execution_records (
  business_transaction_id
);

-- =====================================================
-- Comments
-- =====================================================

comment on column verification_receipts.business_transaction_id
is 'Root business transaction identifier associated with the verified authority decision';

comment on column execution_records.business_transaction_id
is 'Root business transaction identifier associated with the executed action';