import { z } from "zod";

export const OverrideAttestRequestSchema = z.object({
  overrideId: z.string(),
}).meta({
  id: "OverrideAttestRequest",
});

export type OverrideAttestRequest =
  z.infer<typeof OverrideAttestRequestSchema>;
