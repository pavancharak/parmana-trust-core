export interface AttestationReference {

  attestationId: string;

  createdAt: string;
}

export interface AttestationChain {

  chainId: string;

  attestations:
    AttestationReference[];
}