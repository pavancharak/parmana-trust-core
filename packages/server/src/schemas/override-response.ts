import { z } from "zod";

export const OverrideResponseSchema = z.object({
  overrideId: z.string(),
  status: z.string(),
}).meta({
  id: "OverrideResponse",
  example: {
    overrideId: "ovr-001",
    status: "APPROVED",
  },
});

export type OverrideResponse =
  z.infer<typeof OverrideResponseSchema>;
