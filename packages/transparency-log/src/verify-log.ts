import type {
  LogEntry
} from "./types.js";

export function verifyLog(

  entries: LogEntry[]

): boolean {

  for (

    let i = 1;

    i < entries.length;

    i++

  ) {

    if (

      entries[i].previousHash !==
      entries[i - 1].hash

    ) {

      return false;
    }
  }

  return true;
}