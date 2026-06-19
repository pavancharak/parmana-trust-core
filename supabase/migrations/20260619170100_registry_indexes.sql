create index if not exists idx_tasks_policy_id
on tasks(policy_id);

create index if not exists idx_policies_task_id
on policies(task_id);

create index if not exists idx_policies_schema_id
on policies(schema_id);

create index if not exists idx_schemas_policy_id
on schemas(policy_id);