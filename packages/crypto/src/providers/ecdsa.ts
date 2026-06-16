import crypto from "node:crypto";

import type {
  Signer
} from "../signer.js";

export class ECDSASigner
  implements Signer {

  constructor(
    private readonly privateKey:
      crypto.KeyObject,

    private readonly publicKey:
      crypto.KeyObject
  ) {}

  algorithm(): string {

    return "ecdsa-p256";
  }

  async sign(
    payload: Uint8Array
  ): Promise<Uint8Array> {

    return crypto.sign(
      "sha256",
      payload,
      this.privateKey
    );
  }

  async verify(
    payload: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {

    return crypto.verify(
      "sha256",
      payload,
      this.publicKey,
      signature
    );
  }
}