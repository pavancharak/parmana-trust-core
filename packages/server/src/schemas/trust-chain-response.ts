import { z } from "zod";

export const TrustChainResponseSchema = z.object({
  businessTransactionId: z.string(),
  attestationId: z.string(),
  verificationId: z.string(),
  executionId: z.string(),
}).meta({
  id: "TrustChainResponse",
});

export type TrustChainResponse =
  z.infer<typeof TrustChainResponseSchema>;
