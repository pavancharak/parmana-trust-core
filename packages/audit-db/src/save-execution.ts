import {
  supabase
} from "./supabase.js";

import type {
  ExecutionRecord
} from "./execution-record.js";

export async function saveExecution(
  execution: ExecutionRecord
) {

  const {
    error
  } = await supabase

    .from(
      "execution_records"
    )

    .insert({

      execution_id:
        execution.executionId,

      subject_id:
        execution.subjectId,

      decision_id:
        execution.decisionId,

      receipt_id:
        execution.receiptId,

      task_id:
        execution.taskId,

      policy_id:
        execution.policyId,

      policy_version:
        execution.policyVersion,

      execution_system:
        execution.executionSystem,

      execution_reference:
        execution.executionReference,

      execution_status:
        execution.executionStatus,

      executed_at:
        execution.executedAt

    });

  if (error) {

    throw error;

  }

}