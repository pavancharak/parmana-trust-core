import { z } from "zod";

export const AttestRequestSchema = z.object({
  task: z.string(),

  signals: z.record(z.string(), z.any()),
}).meta({
  id: "AttestRequest",
});

export type AttestRequest =
  z.infer<typeof AttestRequestSchema>;