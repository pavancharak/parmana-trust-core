"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReceipt = createReceipt;
var hash_bundle_js_1 = require("./hash-bundle.js");
function createReceipt(bundle) {
    return {
        bundleId: bundle.bundleId,
        bundleHash: (0, hash_bundle_js_1.hashBundle)(bundle),
        trustRootId: bundle.trustRoot.id,
        trustRootVersion: bundle.trustRoot.version,
        createdAt: new Date()
            .toISOString()
    };
}
