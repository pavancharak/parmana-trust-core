import { z } from "zod";

export const TrustChainParamsSchema = z.object({
  businessTransactionId: z.string(),
});

export type TrustChainParams =
  z.infer<typeof TrustChainParamsSchema>;