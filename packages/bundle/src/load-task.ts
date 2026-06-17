import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type {
  TaskDefinition
} from "@parmana/contracts";

const __filename =
  fileURLToPath(
    import.meta.url
  );

const __dirname =
  path.dirname(
    __filename
  );

const repoRoot =
  path.resolve(
    __dirname,
    "../../.."
  );

export function loadTask(
  taskName: string
): TaskDefinition {

  const taskPath =
    path.join(
      repoRoot,
      "tasks",
      taskName,
      "task.json"
    );

  return JSON.parse(
    fs.readFileSync(
      taskPath,
      "utf8"
    )
  ) as TaskDefinition;
}