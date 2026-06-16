import {
  buildMerkleRoot
} from "../../packages/evidence/src/index.js";

const root =
  buildMerkleRoot(
    [
      "evidence-a",
      "evidence-b",
      "evidence-c"
    ]
  );

console.log(root);