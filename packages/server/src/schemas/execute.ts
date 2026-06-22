import { z } from "zod";

export const ExecuteRequestSchema = z.object({
  executionToken: z.string(),
}).meta({
  id: "ExecuteRequest",
});

export type ExecuteRequest =
  z.infer<typeof ExecuteRequestSchema>;
