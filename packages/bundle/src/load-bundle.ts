import * as fs from "node:fs";

import {
  deserializeBundle
} from "./deserialize.js";

import type {
  DecisionBundle
} from "./types.js";

export function loadBundle(
  path: string
): DecisionBundle {

  return deserializeBundle(

    fs.readFileSync(
      path,
      "utf8"
    )
  );
}