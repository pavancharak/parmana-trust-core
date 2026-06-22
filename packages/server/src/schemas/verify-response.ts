import { z } from "zod";

export const VerifyResponseSchema = z.object({
  verificationId: z.string(),

  valid: z.boolean(),
});

export type VerifyResponse =
  z.infer<typeof VerifyResponseSchema>;