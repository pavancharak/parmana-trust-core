import type {
  AuditRecord
} from "./types.js";

export function countByType(

  records: AuditRecord[]

): Record<string, number> {

  return records.reduce(

    (
      counts,
      record
    ) => {

      counts[
        record.type
      ] =

        (
          counts[
            record.type
          ] ?? 0
        ) + 1;

      return counts;

    },

    {} as Record<
      string,
      number
    >
  );
}