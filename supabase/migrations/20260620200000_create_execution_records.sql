create table if not exists execution_records (

  execution_id text primary key,

  subject_id text not null,

  decision_id text not null,

  receipt_id text not null,

  task_id text not null,

  policy_id text not null,

  policy_version text not null,

  execution_system text not null,

  execution_reference text not null,

  execution_status text not null,

  executed_at timestamptz not null

);

create index if not exists
idx_execution_subject
on execution_records(subject_id);

create index if not exists
idx_execution_decision
on execution_records(decision_id);

create index if not exists
idx_execution_receipt
on execution_records(receipt_id);