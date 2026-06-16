import type {
  AuditRecord
} from "./types.js";

export function queryByType(

  records: AuditRecord[],

  type: string

): AuditRecord[] {

  return records.filter(

    record =>
      record.type === type
  );
}