export interface SignatureProvider {

  algorithm(): string;

  sign(
    message: string
  ): string;

  verify(
    message: string,
    signature: string
  ): boolean;

  publicKey(): string;

}