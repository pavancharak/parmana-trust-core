import { z } from "zod";

export const AttestResponseSchema = z.object({
  attestationId: z.string(),
  status: z.string(),
}).meta({
  id: "AttestResponse",
  example: {
    attestationId: "att-001",
    status: "ATTESTED",
  },
});

export type AttestResponse =
  z.infer<typeof AttestResponseSchema>;
