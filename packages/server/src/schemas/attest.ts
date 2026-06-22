import { z } from "zod";

export const AttestRequestSchema = z.object({
  task: z.string(),
  signals: z.record(z.string(), z.any()),
}).meta({
  id: "AttestRequest",
  example: {
    task: "payment-transfer",
    signals: {
      role: "finance-manager",
      approvalId: "APR-1001",
      amount: 5000,
      currency: "USD",
    },
  },
});

export type AttestRequest =
  z.infer<typeof AttestRequestSchema>;
