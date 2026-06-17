export class AnchorStore {
    anchors = new Map();
    add(anchor) {
        this.anchors.set(anchor.id, anchor);
    }
    get(id) {
        return this.anchors.get(id);
    }
    list() {
        return Array.from(this.anchors.values());
    }
}
//# sourceMappingURL=anchor-store.js.map