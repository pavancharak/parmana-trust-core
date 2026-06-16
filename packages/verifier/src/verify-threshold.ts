import type {
  ThresholdPolicy
} from "@parmana/trust-profiles";

export function verifyThreshold(

  approvedSigners: string[],

  policy: ThresholdPolicy

): boolean {

  const approved =
    approvedSigners.filter(

      signer =>
        policy.signers.includes(
          signer
        )

    );

  return (
    approved.length >=
    policy.threshold
  );
}