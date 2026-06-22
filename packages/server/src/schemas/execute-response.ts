import { z } from "zod";

export const ExecuteResponseSchema = z.object({
  executionId: z.string(),

  status: z.string(),
});

export type ExecuteResponse =
  z.infer<typeof ExecuteResponseSchema>;