import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type {
  PolicyDefinition
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

export function loadPolicy(
  policyId: string,
  version: string
): PolicyDefinition {

  const policyPath =
    path.join(
      repoRoot,
      "policies",
      policyId,
      version,
      "policy.json"
    );

  const json =
    fs.readFileSync(
      policyPath,
      "utf8"
    );

  return JSON.parse(
    json
  ) as PolicyDefinition;
}