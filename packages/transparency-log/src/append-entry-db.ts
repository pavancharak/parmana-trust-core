import type {
  LogEntry
} from "./types.js";

export function appendEntry(

  entries: LogEntry[],

  entry: LogEntry

): LogEntry[] {

  return [

    ...entries,

    entry

  ];

}