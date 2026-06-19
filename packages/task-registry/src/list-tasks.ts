import {
  tasks
} from "./store.js";

export function listTasks() {

  return [
    ...tasks.values()
  ];

}