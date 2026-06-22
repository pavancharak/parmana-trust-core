import { z } from "zod";

export const OverrideVerifyRequestSchema = z.object({
  overrideAttestationId: z.string(),
}).meta({
  id: "OverrideVerifyRequest",
});

export type OverrideVerifyRequest =
  z.infer<typeof OverrideVerifyRequestSchema>;
