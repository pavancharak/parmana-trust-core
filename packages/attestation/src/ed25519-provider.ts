import {
  signHash,
  verifyHash,
  getPublicKey
} from "./crypto.js";

import type {
  SignatureProvider
} from "./signature-provider.js";

export class Ed25519Provider
  implements SignatureProvider {

  algorithm(): string {

    return "ed25519";

  }

  sign(
    message: string
  ): string {

    return signHash(
      message
    );

  }

  verify(
    message: string,
    signature: string
  ): boolean {

    return verifyHash(
      message,
      signature
    );

  }

  publicKey(): string {

    return getPublicKey();

  }

}