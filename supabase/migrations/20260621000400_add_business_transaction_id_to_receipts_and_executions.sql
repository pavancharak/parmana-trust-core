-- =====================================================
-- ADR-0004 Business Transaction Binding
-- Receipt + Execution lineage propagation
-- =====================================================

alter table verification_receipts
add column if not exists
business_transaction_id text;

alter table execution_records
add column if not exists
business_transaction_id text;

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

comment on column verification_receipts.business_transaction_id
is 'Root business transaction identifier associated with verification receipt';

comment on column execution_records.business_transaction_id
is 'Root business transaction identifier associated with execution record';