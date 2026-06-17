create table if not exists decision_attestations (

  id bigint
    generated always as identity
    primary key,

  decision_id text,

  task_id text not null,

  policy_id text not null,

  policy_version text not null,

  attestation jsonb not null,

  created_at timestamptz
    default now()

);