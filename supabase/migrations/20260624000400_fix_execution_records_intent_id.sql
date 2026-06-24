-- 20260624000400_fix_execution_records_intent_id.sql

alter table execution_records
add column if not exists intent_id text;