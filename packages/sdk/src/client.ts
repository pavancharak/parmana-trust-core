export class ParmanaClient {

  constructor(
    private readonly baseUrl: string
  ) {}

  private async post(
    path: string,
    body: unknown
  ) {

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

    return response.json();

  }

  private async get(
    path: string
  ) {

    const response =
      await fetch(
        `${this.baseUrl}${path}`
      );

    if (!response.ok) {

      throw new Error(
        await response.text()
      );

    }

    return response.json();

  }

  attest(body: unknown) {
    return this.post(
      "/attest",
      body
    );
  }

  verify(body: unknown) {
    return this.post(
      "/verify",
      body
    );
  }

  issueToken(
    receiptId: string
  ) {
    return this.post(
      "/token",
      { receiptId }
    );
  }

  execute(body: unknown) {
    return this.post(
      "/execute",
      body
    );
  }

  createOverride(
    body: unknown
  ) {
    return this.post(
      "/override",
      body
    );
  }

  attestOverride(
    overrideId: string
  ) {
    return this.post(
      "/override/attest",
      { overrideId }
    );
  }

  verifyOverride(
    overrideAttestationId:
      string
  ) {
    return this.post(
      "/override/verify",
      {
        overrideAttestationId
      }
    );
  }

  getTrustChain(
    businessTransactionId:
      string
  ) {
    return this.get(
      `/trust-chain/${businessTransactionId}`
    );
  }

}
