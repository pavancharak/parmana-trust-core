import type {
  TrustRoot
} from "./types.js";

export interface ChainVerificationResult {

  valid: boolean;

  versions:
    string[];

  errors:
    string[];
}

export function verifyChain(

  chain:
    TrustRoot[]

): ChainVerificationResult {

  const errors:
    string[] = [];

  const versions =
    chain.map(
      root => root.version
    );

  for (
    let i = 1;
    i < chain.length;
    i++
  ) {

    const previous =
      chain[i - 1];

    const current =
      chain[i];

    if (
      current.previousVersion !==
      previous.version
    ) {

      errors.push(

        `Broken chain between ${previous.version} and ${current.version}`
      );
    }
  }

  return {

    valid:
      errors.length === 0,

    versions,

    errors
  };
}