import * as fs from "node:fs";

import type {
  DecisionBundle
} from "./types.js";

import {
  serializeBundle
} from "./serialize.js";

export function saveBundle(

  bundle: DecisionBundle,

  path: string

): void {

  fs.writeFileSync(

    path,

    serializeBundle(
      bundle
    ),

    "utf8"
  );
}