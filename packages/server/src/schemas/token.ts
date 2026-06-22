import { z } from "zod";

export const TokenRequestSchema = z.object({
  verificationId: z.string(),
});

export type TokenRequest =
  z.infer<typeof TokenRequestSchema>;