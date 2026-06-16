import {
  loadBundle,
  createReceipt
} from "../../../packages/bundle/src/index.js";

const path =
  process.argv[2];

const bundle =
  loadBundle(path);

console.log(
  JSON.stringify(
    createReceipt(bundle),
    null,
    2
  )
);