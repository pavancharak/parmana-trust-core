import { z } from "zod";

export const ExecuteRequestSchema = z.object({
  executionToken: z.string(),
});

export type ExecuteRequest =
  z.infer<typeof ExecuteRequestSchema>;