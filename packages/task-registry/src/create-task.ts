import type {
  Task
} from "./types.js";

import {
  tasks
} from "./store.js";

export function createTask(
  task: Task
): Task {

  tasks.set(
    task.taskId,
    task
  );

  return task;

}