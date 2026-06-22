import { z } from "zod";

export const VerifyRequestSchema = z.object({
  attestation: z.object({}),

  policy: z.object({}),
});

export type VerifyRequest =
  z.infer<typeof VerifyRequestSchema>;