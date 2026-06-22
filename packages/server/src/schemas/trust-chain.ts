import { z } from "zod";

export const TrustChainParamsSchema = z.object({
  businessTransactionId: z.string(),
}).meta({
  id: "TrustChainParams",
});

export type TrustChainParams =
  z.infer<typeof TrustChainParamsSchema>;
