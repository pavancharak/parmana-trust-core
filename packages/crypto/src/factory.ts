import type {
  Signer
} from "./signer.js";

import {
  Ed25519Signer
} from "./providers/ed25519.js";

import {
  ECDSASigner
} from "./providers/ecdsa.js";

import crypto from "node:crypto";

export type SupportedAlgorithm =
  | "ed25519"
  | "ecdsa-p256";

export class SignerFactory {

  static create(
    algorithm: SupportedAlgorithm
  ): Signer {

    switch (algorithm) {

      case "ed25519": {

        const {
          privateKey,
          publicKey
        } =
          crypto.generateKeyPairSync(
            "ed25519"
          );

        return new Ed25519Signer(
          privateKey,
          publicKey
        );
      }

      case "ecdsa-p256": {

        const {
          privateKey,
          publicKey
        } =
          crypto.generateKeyPairSync(
            "ec",
            {
              namedCurve:
                "prime256v1"
            }
          );

        return new ECDSASigner(
          privateKey,
          publicKey
        );
      }

      default:
        throw new Error(
          `Unsupported algorithm: ${algorithm}`
        );
    }
  }
}