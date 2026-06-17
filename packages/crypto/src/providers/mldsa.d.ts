import type { Signer } from "../signer.js";
export declare class MLDSASigner implements Signer {
    algorithm(): string;
    sign(_payload: Uint8Array): Promise<Uint8Array>;
    verify(_payload: Uint8Array, _signature: Uint8Array): Promise<boolean>;
}
//# sourceMappingURL=mldsa.d.ts.map