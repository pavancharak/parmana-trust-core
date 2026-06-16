import type {
  AuditRecord
} from "./types.js";

export class AuditStore {

  private records:
    AuditRecord[] = [];

  add(
    record: AuditRecord
  ): void {

    this.records.push(
      record
    );
  }

  getAll():
    AuditRecord[] {

    return [
      ...this.records
    ];
  }

  getById(
    id: string
  ): AuditRecord | undefined {

    return this.records.find(

      record =>
        record.id === id

    );
  }

  remove(
    id: string
  ): void {

    this.records =
      this.records.filter(

        record =>
          record.id !== id

      );
  }

  count():
    number {

    return this.records.length;
  }

  clear():
    void {

    this.records = [];
  }
}