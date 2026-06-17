create table if not exists trust_roots (

  id bigint
    generated always as identity
    primary key,

  root_id text
    not null,

  root_hash text
    not null,

  receipt_count integer
    not null,

  published_at timestamptz
    not null
    default now()

);

create unique index if not exists
idx_trust_roots_root_id
on trust_roots(root_id);

create index if not exists
idx_trust_roots_published_at
on trust_roots(published_at desc);