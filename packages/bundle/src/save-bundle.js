"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveBundle = saveBundle;
var fs = require("node:fs");
var serialize_js_1 = require("./serialize.js");
function saveBundle(bundle, path) {
    fs.writeFileSync(path, (0, serialize_js_1.serializeBundle)(bundle), "utf8");
}
