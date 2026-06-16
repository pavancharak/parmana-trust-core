"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorStore = void 0;
var AnchorStore = /** @class */ (function () {
    function AnchorStore() {
        this.anchors = new Map();
    }
    AnchorStore.prototype.add = function (anchor) {
        this.anchors.set(anchor.id, anchor);
    };
    AnchorStore.prototype.get = function (id) {
        return this.anchors.get(id);
    };
    AnchorStore.prototype.list = function () {
        return Array.from(this.anchors.values());
    };
    return AnchorStore;
}());
exports.AnchorStore = AnchorStore;
