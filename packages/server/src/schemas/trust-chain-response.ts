import { z } from "zod";

export const TrustChainResponseSchema = z.object({
  businessTransactionId: z.string(),
  attestationId: z.string(),
  verificationId: z.string(),
  executionId: z.string(),
}).meta({
  id: "TrustChainResponse",
  example: {
    businessTransactionId: "txn-001",
    attestationId: "att-001",
    verificationId: "ver-001",
    executionId: "exec-001",
  },
});

export type TrustChainResponse =
  z.infer<typeof TrustChainResponseSchema>;
