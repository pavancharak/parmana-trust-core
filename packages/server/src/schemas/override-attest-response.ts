import { z } from "zod";

export const OverrideAttestResponseSchema = z.object({
  overrideAttestationId: z.string(),
}).meta({
  id: "OverrideAttestResponse",
  example: {
    overrideAttestationId: "ovr-att-001",
  },
});

export type OverrideAttestResponse =
  z.infer<typeof OverrideAttestResponseSchema>;
