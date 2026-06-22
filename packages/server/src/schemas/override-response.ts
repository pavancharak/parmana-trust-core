import { z } from "zod";

export const OverrideResponseSchema = z.object({
  overrideId: z.string(),

  status: z.string(),
}).meta({
  id: "OverrideResponse",
});

export type OverrideResponse =
  z.infer<typeof OverrideResponseSchema>;
