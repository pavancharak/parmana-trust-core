"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProof = createProof;
var crypto = require("node:crypto");
function sha256(value) {
    return crypto
        .createHash("sha256")
        .update(value)
        .digest("hex");
}
function createProof(leaves, index) {
    var _a;
    var path = [];
    var level = leaves.map(sha256);
    var currentIndex = index;
    while (level.length > 1) {
        var next = [];
        for (var i = 0; i < level.length; i += 2) {
            var left = level[i];
            var right = (_a = level[i + 1]) !== null && _a !== void 0 ? _a : left;
            if (i === currentIndex ||
                i + 1 === currentIndex) {
                path.push(i === currentIndex
                    ? right
                    : left);
                currentIndex =
                    Math.floor(i / 2);
            }
            next.push(sha256(left + right));
        }
        level = next;
    }
    return {
        leaf: leaves[index],
        path: path
    };
}
