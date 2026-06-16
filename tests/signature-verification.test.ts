import { describe, expect, it } from "vitest";

import crypto from "node:crypto";

import {
  Ed25519Signer
} from "../packages/crypto/src/providers/ed25519.js";

describe("signature verification", () => {

  it("verifies valid signature", async () => {

    const {
      privateKey,
      publicKey
    } = crypto.generateKeyPairSync(
      "ed25519"
    );

    const signer =
      new Ed25519Signer(
        privateKey,
        publicKey
      );

    const payload =
      new TextEncoder()
        .encode("hello");

    const signature =
      await signer.sign(
        payload
      );

    const valid =
      await signer.verify(
        payload,
        signature
      );

    expect(valid)
      .toBe(true);
  });

  it("rejects tampered payload", async () => {

    const {
      privateKey,
      publicKey
    } = crypto.generateKeyPairSync(
      "ed25519"
    );

    const signer =
      new Ed25519Signer(
        privateKey,
        publicKey
      );

    const payload =
      new TextEncoder()
        .encode("hello");

    const signature =
      await signer.sign(
        payload
      );

    const tampered =
      new TextEncoder()
        .encode("goodbye");

    const valid =
      await signer.verify(
        tampered,
        signature
      );

    expect(valid)
      .toBe(false);
  });

});