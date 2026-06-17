import * as crypto from "node:crypto";
function sha256(value) {
    return crypto
        .createHash("sha256")
        .update(value)
        .digest("hex");
}
export function buildMerkleRoot(leaves) {
    if (leaves.length === 0) {
        throw new Error("Merkle tree requires leaves");
    }
    let level = leaves.map(sha256);
    while (level.length > 1) {
        const next = [];
        for (let i = 0; i < level.length; i += 2) {
            const left = level[i];
            const right = level[i + 1] ??
                left;
            next.push(sha256(left + right));
        }
        level = next;
    }
    return level[0];
}
//# sourceMappingURL=merkle.js.map