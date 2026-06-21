alter table override_attestations
add column task_id text;

alter table override_attestations
add column policy_id text;

alter table override_attestations
add column policy_version text;

alter table override_attestations
add column override_subject_id text;

alter table override_attestations
add column override_action text;

alter table override_attestations
add column override_reason text;