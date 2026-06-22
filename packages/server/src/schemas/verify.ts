import { z } from "zod";

export const VerifyRequestSchema = z.object({
  attestation: z.object({}),
  policy: z.object({}),
}).meta({
  id: "VerifyRequest",
  example: {
    attestation: {
      attestationId: "att-001",
    },
    policy: {
      policyId: "payment-policy",
      version: "1.0",
    },
  },
});

export type VerifyRequest =
  z.infer<typeof VerifyRequestSchema>;
