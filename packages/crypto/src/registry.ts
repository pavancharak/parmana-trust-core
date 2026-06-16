import type {
  Signer
} from "./signer.js";

export class SignerRegistry {

  private readonly signers =
    new Map<
      string,
      Signer
    >();

  register(
    signer: Signer
  ): void {

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

  has(
    algorithm: string
  ): boolean {

    return this.signers.has(
      algorithm
    );
  }

  list(): string[] {

    return Array.from(
      this.signers.keys()
    );
  }
}