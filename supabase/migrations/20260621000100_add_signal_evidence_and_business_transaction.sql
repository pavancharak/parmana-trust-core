alter table authority_decisions
add column if not exists business_transaction_id text;

create index if not exists
idx_authority_decisions_business_txn
on authority_decisions (
  business_transaction_id
);

create table if not exists signal_evidence (

  id bigserial primary key,

  decision_id text not null,

  business_transaction_id text,

  signal_snapshot jsonb not null,

  created_at timestamptz not null
    default now()

);

create index if not exists
idx_signal_evidence_decision_id
on signal_evidence (
  decision_id
);

create index if not exists
idx_signal_evidence_business_txn
on signal_evidence (
  business_transaction_id
);