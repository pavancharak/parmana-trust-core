import { z } from "zod";

export const OverrideRequestSchema = z.object({
  businessTransactionId: z.string(),

  reason: z.string(),

  approver: z.string(),
}).meta({
  id: "OverrideRequest",
});

export type OverrideRequest =
  z.infer<typeof OverrideRequestSchema>;
