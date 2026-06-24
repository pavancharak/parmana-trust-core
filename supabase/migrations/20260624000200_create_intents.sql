create table intents (

  intent_id text
    primary key,

  business_transaction_id text
    not null,

  decision_id text
    not null,

  task_id text
    not null,

  policy_id text
    not null,

  policy_version text
    not null,

  payload jsonb
    not null,

  intent_hash text
    not null,

  created_at timestamptz
    not null
    default now()

);

create index idx_intents_business_transaction
on intents(
  business_transaction_id
);

create index idx_intents_decision
on intents(
  decision_id
);