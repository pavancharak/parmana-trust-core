import { z } from "zod";

export const OverrideVerifyRequestSchema = z.object({
  overrideAttestationId: z.string(),
}).meta({
  id: "OverrideVerifyRequest",
  example: {
    overrideAttestationId: "ovr-att-001",
  },
});

export type OverrideVerifyRequest =
  z.infer<typeof OverrideVerifyRequestSchema>;
