import { z } from "zod";

export const OverrideVerifyResponseSchema = z.object({
  verificationId: z.string(),

  valid: z.boolean(),
}).meta({
  id: "OverrideVerifyResponse",
});

export type OverrideVerifyResponse =
  z.infer<typeof OverrideVerifyResponseSchema>;
