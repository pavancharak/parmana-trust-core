create table if not exists authority_decisions (

  id bigint
    generated always as identity
    primary key,

  decision_id text,

  task_id text not null,

  policy_id text not null,

  policy_version text not null,

  action text not null,

  reason text,

  decision jsonb not null,

  created_at timestamptz
    default now()

);