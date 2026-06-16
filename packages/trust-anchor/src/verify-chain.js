"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyChain = verifyChain;
function verifyChain(chain) {
    var errors = [];
    var versions = chain.map(function (root) { return root.version; });
    for (var i = 1; i < chain.length; i++) {
        var previous = chain[i - 1];
        var current = chain[i];
        if (current.previousVersion !==
            previous.version) {
            errors.push("Broken chain between ".concat(previous.version, " and ").concat(current.version));
        }
    }
    return {
        valid: errors.length === 0,
        versions: versions,
        errors: errors
    };
}
