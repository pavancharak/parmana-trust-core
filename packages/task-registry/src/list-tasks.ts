import {
  supabase
} from "@parmana/database";

import type {
  Task
} from "./types.js";

export async function listTasks(): Promise<Task[]> {

  const {
    data,
    error
  } = await supabase
    .from("tasks")
    .select("*");

  if (error || !data) {
    return [];
  }

  return data.map(
    row => ({
      taskId: row.task_id,
      name: row.name,
      description: row.description,
      active: row.active,
      policyId: row.policy_id
    })
  );
}