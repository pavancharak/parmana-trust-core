import {
  supabase
} from "@parmana/database";

import type {
  Signal
} from "./types.js";

export async function listSignals(): Promise<Signal[]> {

  const {
    data,
    error
  } = await supabase
    .from("signals")
    .select("*");

  if (error || !data) {
    return [];
  }

  return data.map(
    row => ({
      signalId: row.signal_id,
      name: row.name,
      type: row.type,
      trusted: row.trusted,
      source: row.source
    })
  );
}