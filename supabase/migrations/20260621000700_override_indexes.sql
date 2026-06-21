create index idx_override_decisions_transaction
on override_decisions(
  business_transaction_id
);

create index idx_override_decisions_decision
on override_decisions(
  decision_id
);

create index idx_override_attestations_transaction
on override_attestations(
  business_transaction_id
);

create index idx_override_receipts_transaction
on override_verification_receipts(
  business_transaction_id
);