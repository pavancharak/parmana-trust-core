import { z } from "zod";

export const OverrideRequestSchema = z.object({
  businessTransactionId: z.string(),
  reason: z.string(),
  approver: z.string(),
}).meta({
  id: "OverrideRequest",
  example: {
    businessTransactionId: "txn-001",
    reason: "Emergency payment release",
    approver: "cfo@company.com",
  },
});

export type OverrideRequest =
  z.infer<typeof OverrideRequestSchema>;
