import {
  tasks
} from "./store.js";

export function getTask(
  taskId: string
) {

  return tasks.get(
    taskId
  );

}