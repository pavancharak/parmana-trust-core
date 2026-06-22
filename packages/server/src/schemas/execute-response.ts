import { z } from "zod";

export const ExecuteResponseSchema = z.object({
  executionId: z.string(),
  status: z.string(),
}).meta({
  id: "ExecuteResponse",
  example: {
    executionId: "exec-001",
    status: "EXECUTED",
  },
});

export type ExecuteResponse =
  z.infer<typeof ExecuteResponseSchema>;
