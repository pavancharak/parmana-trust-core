export interface TrustAnchor {

  id: string;

  algorithm: string;

  publicKey: string;

  createdAt: string;

  expiresAt?: string;
}

export interface TrustRoot {

  /**
   * Stable trust root identifier.
   *
   * Example:
   * root-1
   */
  id: string;

  /**
   * Immutable root version.
   *
   * Example:
   * v1
   * v2
   * v3
   */
  version: string;

  /**
   * Previous root version.
   *
   * Used for:
   * - key rotation
   * - trust history
   * - auditability
   * - quantum migration
   */
  previousVersion?: string;

  /**
   * Active trust anchors
   * trusted by this root version.
   */
  anchors:
    TrustAnchor[];

  createdAt: string;
}

export interface TrustChain {

  rootId: string;

  rootVersion: string;

  anchorIds:
    string[];
}