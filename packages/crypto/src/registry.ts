import type {
  Signer
} from "./signer";

export class SignerRegistry {

  private readonly signers =
    new Map<
      string,
      Signer
    >();

  register(
    signer: Signer
  ) {

    this.signers.set(
      signer.algorithm(),
      signer
    );
  }

  get(
    algorithm: string
  ): Signer {

    const signer =
      this.signers.get(
        algorithm
      );

    if (!signer) {

      throw new Error(
        `Unknown signer: ${algorithm}`
      );
    }

    return signer;
  }
}