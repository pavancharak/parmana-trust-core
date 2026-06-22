import { z } from "zod";

export const OverrideAttestResponseSchema = z.object({
  overrideAttestationId: z.string(),
}).meta({
  id: "OverrideAttestResponse",
});

export type OverrideAttestResponse =
  z.infer<typeof OverrideAttestResponseSchema>;
