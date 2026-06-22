import { z } from "zod";

export const TokenResponseSchema = z.object({
  tokenId: z.string(),

  executionToken: z.string(),
});

export type TokenResponse =
  z.infer<typeof TokenResponseSchema>;