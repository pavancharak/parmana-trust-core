import { z } from "zod";

export const TokenResponseSchema = z.object({
  tokenId: z.string(),
  executionToken: z.string(),
}).meta({
  id: "TokenResponse",
});

export type TokenResponse =
  z.infer<typeof TokenResponseSchema>;
