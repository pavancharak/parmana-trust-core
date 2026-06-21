create table override_decisions (

  override_id text primary key,

  decision_id text not null,

  business_transaction_id text not null,

  task_id text not null,

  policy_id text not null,

  policy_version text not null,

  override_subject_id text not null,

  override_action text not null,

  override_reason text not null,

  created_at timestamptz not null

);

create table override_attestations (

  override_attestation_id text primary key,

  override_id text not null,

  decision_id text not null,

  business_transaction_id text not null,

  attestation_hash text not null,

  attested_at timestamptz not null

);

create table override_verification_receipts (

  override_receipt_id text primary key,

  override_id text not null,

  decision_id text not null,

  business_transaction_id text not null,

  valid boolean not null,

  verified_at timestamptz not null

);