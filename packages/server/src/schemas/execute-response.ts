import { z } from "zod";

export const ExecuteResponseSchema = z.object({
  executionId: z.string(),
  status: z.string(),
}).meta({
  id: "ExecuteResponse",
});

export type ExecuteResponse =
  z.infer<typeof ExecuteResponseSchema>;
