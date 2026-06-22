import { z } from "zod";

export const OverrideAttestRequestSchema = z.object({
  overrideId: z.string(),
}).meta({
  id: "OverrideAttestRequest",
  example: {
    overrideId: "ovr-001",
  },
});

export type OverrideAttestRequest =
  z.infer<typeof OverrideAttestRequestSchema>;
