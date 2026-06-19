-- Task Registry

create table if not exists tasks (
  task_id text primary key,
  name text not null,
  description text,
  active boolean not null default true,
  policy_id text not null,
  created_at timestamptz not null default now()
);

-- Policy Registry

create table if not exists policies (
  policy_id text primary key,
  task_id text not null,
  schema_id text not null,
  version text not null,
  status text not null,
  definition jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Schema Registry

create table if not exists schemas (
  schema_id text primary key,
  policy_id text not null,
  version text not null,
  fields jsonb not null,
  created_at timestamptz not null default now()
);

-- Signal Registry

create table if not exists signals (
  signal_id text primary key,
  name text not null,
  type text not null,
  trusted boolean not null default false,
  source text not null,
  created_at timestamptz not null default now()
);