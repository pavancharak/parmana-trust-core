import * as crypto from "node:crypto";

function sha256(
  value: string
): string {

  return crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
}

export interface InclusionProof {

  leaf: string;

  path: string[];
}

export function createProof(
  leaves: string[],
  index: number
): InclusionProof {

  const path: string[] = [];

  let level =
    leaves.map(
      sha256
    );

  let currentIndex =
    index;

  while (
    level.length > 1
  ) {

    const next: string[] = [];

    for (
      let i = 0;
      i < level.length;
      i += 2
    ) {

      const left =
        level[i];

      const right =
        level[i + 1] ??
        left;

      if (
        i === currentIndex ||
        i + 1 === currentIndex
      ) {

        path.push(
          i === currentIndex
            ? right
            : left
        );

        currentIndex =
          Math.floor(
            i / 2
          );
      }

      next.push(
        sha256(
          left + right
        )
      );
    }

    level = next;
  }

  return {

    leaf:
      leaves[index],

    path
  };
}