import { z } from "zod";

export const ExecuteRequestSchema = z.object({
  executionToken: z.string(),
}).meta({
  id: "ExecuteRequest",
  example: {
    executionToken: "ett-001",
  },
});

export type ExecuteRequest =
  z.infer<typeof ExecuteRequestSchema>;
