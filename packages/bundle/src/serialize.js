"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeBundle = serializeBundle;
function serializeBundle(bundle) {
    return JSON.stringify(bundle, null, 2);
}
