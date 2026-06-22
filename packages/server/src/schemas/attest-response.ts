import { z } from "zod";

export const AttestResponseSchema = z.object({
  attestationId: z.string(),

  status: z.string(),
});

export type AttestResponse =
  z.infer<typeof AttestResponseSchema>;