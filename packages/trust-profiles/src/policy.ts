export interface TrustPolicy {

  name: string;

  requiredAlgorithms:
    string[];

  minimumSignatures:
    number;
}