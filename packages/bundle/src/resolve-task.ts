import {
  loadTask
} from "./load-task.js";

import {
  loadPolicy
} from "./load-policy.js";

export function resolveTask(

  taskName: string

) {

  const task =
    loadTask(
      taskName
    );

  const policy =
    loadPolicy(

      task.policy.policyId,

      task.policy.policyVersion
    );

  return {

    task,

    policy
  };
}