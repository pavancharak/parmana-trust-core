import type {
  Signer
} from "../signer.js";

export class MLDSASigner
  implements Signer {

  algorithm(): string {

    return "ml-dsa-65";
  }

  async sign(
    _payload: Uint8Array
  ): Promise<Uint8Array> {

    throw new Error(
      "ML-DSA provider not implemented"
    );
  }

  async verify(
    _payload: Uint8Array,
    _signature: Uint8Array
  ): Promise<boolean> {

    throw new Error(
      "ML-DSA provider not implemented"
    );
  }
}