"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBundle = loadBundle;
var fs = require("node:fs");
var deserialize_js_1 = require("./deserialize.js");
function loadBundle(path) {
    return (0, deserialize_js_1.deserializeBundle)(fs.readFileSync(path, "utf8"));
}
