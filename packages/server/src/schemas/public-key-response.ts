import { z } from "zod";

export const PublicKeyResponseSchema = z.object({
  keyId: z.string(),

  algorithm: z.string(),

  publicKey: z.string(),
}).meta({
  id: "PublicKeyResponse",

  example: {
    keyId: "root-key-1",
    algorithm: "Ed25519",
    publicKey: "MCowBQYDK2VwAyEAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
});

export type PublicKeyResponse =
  z.infer<typeof PublicKeyResponseSchema>;
