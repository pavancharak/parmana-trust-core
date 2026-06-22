import { z } from "zod";

export const TokenRequestSchema = z.object({
  verificationId: z.string(),
}).meta({
  id: "TokenRequest",
});

export type TokenRequest =
  z.infer<typeof TokenRequestSchema>;
