import type {
  AttestRequest,
  VerifyRequest,
  ExecuteRequest,
  DecisionAttestation,
  VerificationReceipt,
  ExecutionToken,
  ExecutionRecord,
  TrustChain
} from "./types.js";

export class ParmanaClient {

  constructor(
    private readonly baseUrl: string
  ) {}

  private async post<T>(
    path: string,
    body: unknown
  ): Promise<T> {

    const response =
      await fetch(
        `${this.baseUrl}${path}`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body:
            JSON.stringify(body)
        }
      );

    if (!response.ok) {

      throw new Error(
        await response.text()
      );

    }

    return response.json() as Promise<T>;

  }

  private async get<T>(
    path: string
  ): Promise<T> {

    const response =
      await fetch(
        `${this.baseUrl}${path}`
      );

    if (!response.ok) {

      throw new Error(
        await response.text()
      );

    }

    return response.json() as Promise<T>;

  }

  async attest(
    body: AttestRequest
  ): Promise<DecisionAttestation> {

    return this.post(
      "/attest",
      body
    );

  }

  async verify(
    body: VerifyRequest
  ): Promise<VerificationReceipt> {

    return this.post(
      "/verify",
      body
    );

  }

  async issueToken(
    receiptId: string
  ): Promise<ExecutionToken> {

    return this.post(
      "/token",
      { receiptId }
    );

  }

  async execute(
    body: ExecuteRequest
  ): Promise<ExecutionRecord> {

    return this.post(
      "/execute",
      body
    );

  }

  async createOverride(
    body: unknown
  ): Promise<unknown> {

    return this.post(
      "/override",
      body
    );

  }

  async attestOverride(
    overrideId: string
  ): Promise<unknown> {

    return this.post(
      "/override/attest",
      { overrideId }
    );

  }

  async verifyOverride(
    overrideAttestationId: string
  ): Promise<unknown> {

    return this.post(
      "/override/verify",
      {
        overrideAttestationId
      }
    );

  }

  async getTrustChain(
    businessTransactionId: string
  ): Promise<TrustChain> {

    return this.get(
      `/trust-chain/${businessTransactionId}`
    );

  }

}