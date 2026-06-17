create table if not exists transparency_log (

  id bigint generated always as identity primary key,

  receipt_id text not null,

  receipt_hash text not null,

  created_at timestamptz not null default now()
);

create index if not exists
idx_transparency_receipt_hash
on transparency_log(receipt_hash);