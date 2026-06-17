import crypto from "node:crypto";
import type { Signer } from "../signer.js";
export declare class Ed25519Signer implements Signer {
    private readonly privateKey;
    private readonly publicKey;
    constructor(privateKey: crypto.KeyObject, publicKey: crypto.KeyObject);
    algorithm(): string;
    sign(payload: Uint8Array): Promise<Uint8Array>;
    verify(payload: Uint8Array, signature: Uint8Array): Promise<boolean>;
}
//# sourceMappingURL=ed25519.d.ts.map