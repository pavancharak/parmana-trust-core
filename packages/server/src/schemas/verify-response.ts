import { z } from "zod";

export const VerifyResponseSchema = z.object({
  verificationId: z.string(),
  valid: z.boolean(),
}).meta({
  id: "VerifyResponse",
});

export type VerifyResponse =
  z.infer<typeof VerifyResponseSchema>;
