import { z } from "zod";

export const OverrideVerifyResponseSchema = z.object({
  verificationId: z.string(),
  valid: z.boolean(),
}).meta({
  id: "OverrideVerifyResponse",
  example: {
    verificationId: "ovr-ver-001",
    valid: true,
  },
});

export type OverrideVerifyResponse =
  z.infer<typeof OverrideVerifyResponseSchema>;
