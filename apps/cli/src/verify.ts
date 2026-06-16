import {
  loadBundle,
  verifyBundle,
  createReceipt
} from "../../../packages/bundle/src/index.js";

const path =
  process.argv[2];

if (!path) {

  console.error(
    "Usage: parmana verify <bundle>"
  );

  process.exit(1);
}

const bundle =
  loadBundle(path);

const verification =
  verifyBundle(bundle);

const receipt =
  createReceipt(bundle);

console.log(
  JSON.stringify(
    {
      verification,
      receipt
    },
    null,
    2
  )
);