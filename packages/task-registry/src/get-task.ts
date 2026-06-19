import {
  supabase
} from "@parmana/database";

import type {
  Task
} from "./types.js";

export async function getTask(
  taskId: string
): Promise<Task | undefined> {

  const {
    data,
    error
  } = await supabase
    .from("tasks")
    .select("*")
    .eq(
      "task_id",
      taskId
    )
    .single();

  if (error) {
    return undefined;
  }

  return {
    taskId: data.task_id,
    name: data.name,
    description: data.description,
    active: data.active,
    policyId: data.policy_id
  };
}