import {
  supabase
} from "@parmana/database";

import type {
  Task
} from "./types.js";

export async function createTask(
  task: Task
): Promise<Task> {

  const {
    error
  } = await supabase
    .from("tasks")
    .upsert({
      task_id: task.taskId,
      name: task.name,
      description: task.description,
      active: task.active,
      policy_id: task.policyId
    });

  if (error) {
    throw error;
  }

  return task;
}