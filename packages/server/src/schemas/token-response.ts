import { z } from "zod";

export const TokenResponseSchema = z.object({
  tokenId: z.string(),
  executionToken: z.string(),
}).meta({
  id: "TokenResponse",
  example: {
    tokenId: "tok-001",
    executionToken: "ett-001",
  },
});

export type TokenResponse =
  z.infer<typeof TokenResponseSchema>;
