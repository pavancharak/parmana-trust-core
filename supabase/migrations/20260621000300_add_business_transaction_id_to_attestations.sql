-- =====================================================
-- ADR-0004 Business Transaction Binding
-- Extend lineage into attestation layer
-- =====================================================

alter table decision_attestations
add column if not exists
business_transaction_id text;

create index if not exists
idx_decision_attestations_business_txn
on decision_attestations (
  business_transaction_id
);

comment on column decision_attestations.business_transaction_id
is 'Root business transaction identifier associated with this attestation';

update decision_attestations
set business_transaction_id =
  attestation->>'businessTransactionId'
where business_transaction_id is null;